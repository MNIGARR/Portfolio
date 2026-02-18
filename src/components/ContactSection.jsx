import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import emailjs from 'emailjs-com';
import { useState } from "react";

export const ContactSection = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const serviceId = "service_pi0nqee";
    const templateId = "template_wpgiw5b";
    const publicKey = "nHczwx5xmKhi7QVHS";

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(serviceId, templateId, e.target, publicKey)
        // eslint-disable-next-line no-unused-vars
        .then((_error) => {
            alert("Message sent successfully!");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Failed to send the message, please try again later."))
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl text-center">
                <h3 className="text-3xl md:text-4x1 font-bold mb-10">
                    Get in <span className="text-primary">Touch</span>
                </h3>
                <p className="mb-8 text-lg text-foreground/80 mx-auto max-w-2xl">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    <div className="space-y-8 ">
                        
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="w-6 h-6 text-primary"/>
                            </div>

                            <div className="space-y-2 text-left">
                                <h4>Email</h4>
                                <a
                                    href="mailto:nigarrmustafazada@gmail.com"
                                    className="text-foreground/80 hover:text-primary transition-colors"
                                >
                                    nigarrmustafazada@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="w-6 h-6 text-primary"/>
                            </div>

                            <div className="space-y-2 text-left">
                                <h4>Phone</h4>
                                <a
                                    href="tel:+994708080791"
                                    className="text-foreground/80 hover:text-primary transition-colors"
                                >
                                    (+994) 70 808 07 91
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="w-6 h-6 text-primary"/>
                            </div>

                            <div className="space-y-2 text-left">
                                <h4>Location</h4>
                                <a
                                    className="text-foreground/80 hover:text-primary transition-colors"
                                >
                                    Azerbaijan, Baku
                                </a>
                            </div>
                        </div>

                        <div className="pt-8 ">
                            <h4 className="font-medium mb-4"> Connect With Me </h4>
                            <div className="flex justify-center space-x-6 mt-4">
                                <a href="https://www.linkedin.com/in/nigarmustafazada/" target="_blank">
                                    <Linkedin></Linkedin>
                                </a>
                                <a href="https://www.instagram.com/m.nigaar_/" target="_blank">
                                    <Instagram></Instagram>
                                </a>
                                <a>
                                    <Linkedin></Linkedin>
                                </a>
                            </div>
                        </div>


                        
                    </div>

                    
                    <div className="pt-5 px-5 bg-card rounded-lg shadow-xs ">
                        <h3 className="text-2xl font-semibold mb-5">Send Me a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>                                
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className="w-full px-3 py-3 mb-2 text-foreground rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                    placeholder="Name"
                                    onChange={(e) => setFormData({...formData, name: e.target.value })}
                                />
                            </div>
                            <div>                                
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    className="w-full px-3 py-3 mb-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                    placeholder="Email"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <div>                                
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    className="w-full px-3 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none"
                                    placeholder="Your Message"
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/80 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}