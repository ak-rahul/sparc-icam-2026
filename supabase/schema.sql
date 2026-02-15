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
