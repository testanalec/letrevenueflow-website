'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  monthlyGoal: string;
  message: string;
  honeypot: string;
}

const services = [
  'Lead Generation',
  'Account-Based Marketing',
  'Pipeline Development',
  'Sales Enablement',
  'Other',
];

const monthlyGoals = [
  '10-25 leads',
  '25-50 leads',
  '50-100 leads',
  '100+ leads',
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    service: '',
    monthlyGoal: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
    }

    if (currentStep === 2) {
      if (!formData.company.trim()) newErrors.company = 'Company name is required';
      if (!formData.service) newErrors.service = 'Please select a service';
    }

    if (currentStep === 3) {
      if (!formData.monthlyGoal) newErrors.monthlyGoal = 'Please select a monthly goal';
      if (!formData.message.trim()) newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setSubmitStatus('success');
      setStep(4);
      return;
    }

    if (!validateStep(3)) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          website: formData.website,
          service: formData.service,
          monthlyGoal: formData.monthlyGoal,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setStep(4);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Step 1: Name + Email */}
        <AnimatePresence>
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@company.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full px-6 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors mt-6"
              >
                Next Step
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Company + Service */}
        <AnimatePresence>
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 transition-colors ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.company && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Website (optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 transition-colors ${
                    errors.service ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a service...</option>
                  {services.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-navy-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 px-6 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors"
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Monthly Goal + Message */}
        <AnimatePresence>
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Monthly Lead Goal
                </label>
                <select
                  name="monthlyGoal"
                  value={formData.monthlyGoal}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 transition-colors ${
                    errors.monthlyGoal ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your goal...</option>
                  {monthlyGoals.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
                {errors.monthlyGoal && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.monthlyGoal}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Tell us more about your goals
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are your biggest challenges with lead generation?"
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-navy-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-6 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send Request'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 4: Success / Error */}
        <AnimatePresence>
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Thank You!</h3>
                  <p className="text-navy-700 mb-6 text-lg">
                    Your request has been received. We'll review your information and get back to
                    you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        website: '',
                        service: '',
                        monthlyGoal: '',
                        message: '',
                        honeypot: '',
                      });
                      setSubmitStatus('idle');
                    }}
                    className="px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors"
                  >
                    Send Another Request
                  </button>
                </>
              ) : (
                <>
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Something went wrong
                  </h3>
                  <p className="text-navy-700 mb-6 text-lg">
                    Please try again or contact us directly at hello@letrevenueflow.com
                  </p>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors"
                  >
                    Try Again
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
