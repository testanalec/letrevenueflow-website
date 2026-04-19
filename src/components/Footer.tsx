'use client';

import Link from 'next/link';
import { Share2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Ready to grow your pipeline?</h3>
              <p className="text-navy-300 mb-6">
                Schedule a free strategy call with our B2B growth experts.
              </p>
              <Link
                href="#contact"
                className="inline-block px-6 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors"
              >
                Book Strategy Call
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Get your free audit</h3>
              <p className="text-navy-300 mb-6">
                Find out where leads are dropping off in your pipeline.
              </p>
              <Link
                href="#contact"
                className="inline-block px-6 py-3 border border-electric-600 text-electric-400 font-medium rounded-lg hover:bg-navy-800 transition-colors"
              >
                Get Free Pipeline Audit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-electric-400 bg-clip-text text-transparent">
                LetRevenueFlow
              </span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-4">
              B2B lead generation and pipeline development for growth-focused companies.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/letrevenueflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-electric-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase text-navy-200 mb-4 tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/lead-generation"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/account-based-marketing"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  Account-Based Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pipeline-development"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  Pipeline Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sales-enablement"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  Sales Enablement
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-bold uppercase text-navy-200 mb-4 tracking-wider">
              Industries
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/industries/saas"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/it-services"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  IT Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/professional-services"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  Professional Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold uppercase text-navy-200 mb-4 tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/case-studies"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase text-navy-200 mb-4 tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-electric-400 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300">
                  WeWork, Sikandarpur
                  <br />
                  Gurgaon, Haryana 121001
                  <br />
                  India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-electric-400 flex-shrink-0" />
                <a
                  href="tel:+919650783699"
                  className="text-navy-300 hover:text-electric-400 transition-colors"
                >
                  +91 9650783699
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-electric-400 flex-shrink-0" />
                <a
                  href="mailto:hello@letrevenueflow.com"
                  className="text-navy-300 hover:text-electric-400 transition-colors break-all"
                >
                  hello@letrevenueflow.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-navy-400 text-sm">
              &copy; {new Date().getFullYear()} LetRevenueFlow. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-navy-400 hover:text-electric-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-navy-400 hover:text-electric-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-navy-400 hover:text-electric-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
