-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  full_name text,
  role text check (role in ('admin', 'reviewer', 'author', 'user')) default 'user',
  affiliation text,
  country text
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can insert their own profile." on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, new.raw_user_meta_data->>'full_name', 'user');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger the function every time a user is created
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- Create details table
create table public.conference_details (
  id serial primary key,
  name text,
  dates text,
  venue text,
  deadlines jsonb
);

-- Create registrations table
create table public.registrations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  affiliation text,
  category text,
  payment_proof_url text, -- Path in storage
  status text check (status in ('pending', 'verified', 'rejected')) default 'pending',
  amount numeric
);

alter table public.registrations enable row level security;

create policy "Users can see their own registrations" on public.registrations
  for select using (auth.uid() = user_id);

create policy "Users can insert their own registrations" on public.registrations
  for insert with check (auth.uid() = user_id);

-- Create submissions table
create table public.submissions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  abstract text not null,
  track text,
  authors text, -- Stores author names as string or JSON
  file_url text not null, -- Path in storage
  status text check (status in ('submitted', 'under_review', 'accepted', 'rejected')) default 'submitted'
);

alter table public.submissions enable row level security;

create policy "Users can see their own submissions" on public.submissions
  for select using (auth.uid() = user_id);

create policy "Users can insert their own submissions" on public.submissions
  for insert with check (auth.uid() = user_id);


-- Storage bucket for receipts
insert into storage.buckets (id, name, public) values ('receipts', 'receipts', false);

create policy "Authenticated users can upload receipts"
on storage.objects for insert
with check ( bucket_id = 'receipts' and auth.role() = 'authenticated' );

create policy "Users can view their own receipts"
on storage.objects for select
using ( bucket_id = 'receipts' and auth.uid() = owner );

-- Storage bucket for papers
insert into storage.buckets (id, name, public) values ('papers', 'papers', false);

create policy "Authenticated users can upload papers"
on storage.objects for insert
with check ( bucket_id = 'papers' and auth.role() = 'authenticated' );

create policy "Users can view their own papers"
on storage.objects for select
using ( bucket_id = 'papers' and auth.uid() = owner );
