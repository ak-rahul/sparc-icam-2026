import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Contact Us"
                description="Have questions? We're here to help."
            />

            <div className="container py-12 px-4 md:px-6 space-y-16">

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Get in Touch</h2>
                            <p className="text-muted-foreground">
                                Whether you have questions about registration, paper submission, or partnership opportunities, our team is ready to assist you.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Address</h3>
                                        <p className="text-muted-foreground">
                                            Grand Convention Center<br />
                                            123 Conference Ave, Suite 400<br />
                                            New York, NY 10001, USA
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-muted-foreground">info@icar2025.org</p>
                                        <p className="text-muted-foreground">support@icar2025.org</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                        <p className="text-muted-foreground">Mon-Fri, 9am - 5pm EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full h-[300px] rounded-lg overflow-hidden border">
                            {/* Placeholder Map Image */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop"
                                alt="Map Location"
                                className="object-cover w-full h-full opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                <span className="bg-background/90 px-4 py-2 rounded shadow-sm text-sm font-medium">Map View</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                        <Input id="first-name" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                        <Input id="last-name" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" placeholder="john@example.com" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <Input id="subject" placeholder="General Inquiry" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                                </div>
                                <Button className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto space-y-8 pt-8 border-t">
                    <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>When is the deadline for paper submission?</AccordionTrigger>
                            <AccordionContent>
                                The deadline for full paper submission is September 1, 2025. Late submissions will not be accepted.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can I register for the conference without submitting a paper?</AccordionTrigger>
                            <AccordionContent>
                                Yes, you can register as an attendee/listener. We welcome anyone interested in the field to join us.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is there a virtual participation option?</AccordionTrigger>
                            <AccordionContent>
                                Yes, ICAR 2025 is a hybrid event. You can choose to attend in-person in New York or virtually via our online platform.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Do you offer student discounts?</AccordionTrigger>
                            <AccordionContent>
                                Yes, specific discounts are available for full-time students. Please provide a valid student ID during registration.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
        </div>
    )
}
