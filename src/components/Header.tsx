'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'Lead Generation', href: '/services/lead-generation' },
  { name: 'Appointment Setting', href: '/services/appointment-setting' },
  { name: 'Outbound Sales Campaigns', href: '/services/outbound-sales-campaigns' },
  { name: 'Revenue Pipeline Management', href: '/services/revenue-pipeline-management' },
];

const industries = [
  { name: 'SaaS', href: '/industries/saas' },
  { name: 'IT Services', href: '/industries/it-services' },
  { name: 'Agencies', href: '/industries/agencies' },
  { name: 'Professional Services', href: '/industries/professional-services' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="LetRevenueFlow"
              width={200}
              height={72}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-navy-900 hover:text-electric-600 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-navy-900 hover:text-electric-600 transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-navy-900 hover:bg-electric-50 hover:text-electric-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-navy-900 hover:text-electric-600 transition-colors flex items-center gap-1">
                Industries
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className="block px-4 py-2 text-sm text-navy-900 hover:bg-electric-50 hover:text-electric-600 transition-colors"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-navy-900 hover:text-electric-600 transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-navy-900 hover:text-electric-600 transition-colors"
            >
              About
            </Link>

          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/book-a-call"
              className="px-6 py-2 bg-electric-600 text-white text-sm font-medium rounded-lg hover:bg-electric-700 transition-colors shadow-sm hover:shadow-md"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 py-4 space-y-2">
                <Link
                  href="/"
                  className="block px-3 py-2 text-sm font-medium text-navy-900 hover:bg-electric-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Services */}
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'services' ? null : 'services')
                  }
                  className="w-full text-left px-3 py-2 text-sm font-medium text-navy-900 hover:bg-electric-50 rounded-lg transition-colors flex items-center justify-between"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-3 py-2 text-sm text-navy-600 hover:text-electric-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Industries */}
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'industries' ? null : 'industries')
                  }
                  className="w-full text-left px-3 py-2 text-sm font-medium text-navy-900 hover:bg-electric-50 rounded-lg transition-colors flex items-center justify-between"
                >
                  Industries
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === 'industries' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="block px-3 py-2 text-sm text-navy-600 hover:text-electric-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/pricing"
                  className="block px-3 py-2 text-sm font-medium text-navy-900 hover:bg-electric-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>

                <Link
                  href="/about"
                  className="block px-3 py-2 text-sm font-medium text-navy-900 hover:bg-electric-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/book-a-call"
                  className="block px-6 py-2 mt-4 bg-electric-600 text-white text-sm font-medium rounded-lg hover:bg-electric-700 transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Strategy Call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
