'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const services = [
  'Lead Generation',
  'Appointment Setting',
  'Outbound Sales Campaigns',
  'Revenue Pipeline Management',
  'Not Sure Yet',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    service: '',
    message: '',
    honeypot: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) { setSubmitStatus('success'); return; }

    setIsLoading(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/rmmittal@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'New Contact Inquiry from LetRevenueFlow',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          website: formData.website || 'Not provided',
          service: formData.service,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="w-full max-w-2xl mx-auto text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-navy-900 mb-3">Thank You!</h3>
        <p className="text-navy-700 mb-6 text-lg">Your request has been received. We will review your information and get back to you within 24 hours.</p>
        <button
          type="button"
          onClick={() => {
            setFormData({ name: '', email: '', company: '', website: '', service: '', message: '', honeypot: '' });
            setSubmitStatus('idle');
          }}
          className="px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-1.5">Full Name *</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-1.5">Work Email *</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@company.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-1.5">Company Name *</label>
            <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-1.5">Website (optional)</label>
            <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://company.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1.5">Service Interested In *</label>
          <select required name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600">
            <option value="">Select a service...</option>
            {services.map((svc) => (<option key={svc} value={svc}>{svc}</option>))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1.5">Tell us about your goals *</label>
          <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="What are your biggest challenges with lead generation or pipeline growth?" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 resize-none" />
        </div>

        {submitStatus === 'error' && (
          <p className="text-red-600 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />Something went wrong. Please try again or email us directly at hello@letrevenueflow.com
          </p>
        )}

        <button type="submit" disabled={isLoading} className="w-full px-6 py-4 bg-electric-600 text-white font-bold rounded-lg hover:bg-electric-700 transition-colors disabled:opacity-50 text-lg">
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
