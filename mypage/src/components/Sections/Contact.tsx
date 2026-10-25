'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
type FormData = { name: string; email: string; message: string };
export default function Contact() {
  const [draftOpened, setDraftOpened] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    const subject = `Portfolio enquiry from ${data.name.trim()}`;
    const body = `Hello Latiif,\n\n${data.message.trim()}\n\nFrom: ${data.name.trim()}\nEmail: ${data.email.trim()}`;
    window.location.href = `mailto:kawumalatiif5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  };
  const inputClass = 'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500';
  return <section id="contact" className="py-20 bg-white"><div className="container-responsive section-padding">
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12"><h2 className="text-4xl font-bold mb-4 text-primary-900">Get In Touch</h2><p className="text-gray-600 max-w-2xl mx-auto">Have a project, research collaboration or professional opportunity in mind? Let’s start a conversation.</p></motion.div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div><h3 className="text-2xl font-bold mb-6 text-primary-900">Contact Information</h3><div className="space-y-6 mb-8">
        <a href="mailto:kawumalatiif5@gmail.com" className="contact-card"><Mail className="text-primary-700 shrink-0"/><div className="min-w-0"><p className="text-gray-600 text-sm">Email</p><p className="text-primary-700 font-semibold break-words">kawumalatiif5@gmail.com</p></div></a>
        <a href="tel:+256701010285" className="contact-card"><Phone className="text-primary-700 shrink-0"/><div><p className="text-gray-600 text-sm">Phone</p><p className="text-primary-700 font-semibold">+256 701 010285</p></div></a>
        <div className="contact-card"><MapPin className="text-primary-700 shrink-0"/><div><p className="text-gray-600 text-sm">Location</p><p className="text-primary-700 font-semibold">Kibuli, Kampala, Uganda</p></div></div>
      </div><div className="bg-primary-50 rounded-2xl p-6 border border-primary-100"><h4 className="font-bold text-lg mb-3 text-primary-900">Let’s talk about</h4><p className="text-gray-700 leading-relaxed">Software and web applications, network and IT operations, data analysis, or collaborative research.</p></div></div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label><input id="name" autoComplete="name" maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name?'name-error':undefined} {...register('name',{required:'Enter your name.',validate:v=>!!v.trim()||'Enter your name.'})} className={inputClass} placeholder="Your name"/>{errors.name&&<p id="name-error" className="error-text" role="alert">{errors.name.message}</p>}</div>
        <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label><input id="email" type="email" autoComplete="email" maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email?'email-error':undefined} {...register('email',{required:'Enter your email.',pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'Enter a valid email address.'}})} className={inputClass} placeholder="you@example.com"/>{errors.email&&<p id="email-error" className="error-text" role="alert">{errors.email.message}</p>}</div>
        <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label><textarea id="message" rows={5} maxLength={2000} aria-invalid={!!errors.message} aria-describedby={errors.message?'message-error':undefined} {...register('message',{required:'Enter a message.',validate:v=>!!v.trim()||'Enter a message.'})} className={inputClass} placeholder="Tell me about your enquiry…"/>{errors.message&&<p id="message-error" className="error-text" role="alert">{errors.message.message}</p>}</div>
        <p className="text-sm text-gray-600">This opens a draft in your email app. Review it and press Send there.</p><button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">Open Email Draft <ArrowUpRight size={20}/></button>
        {draftOpened&&<p role="status" className="text-sm text-gray-600">Your email app was requested to open. Your message has not been sent by this website. If no app opens, email kawumalatiif5@gmail.com directly.</p>}
      </form>
    </div>
  </div></section>;
}
