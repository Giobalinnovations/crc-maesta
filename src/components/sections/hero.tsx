'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ui/contact-form';
import CloudinaryImage from '../cloudinary-image';

// Icon components
const LocationIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
    />
  </svg>
);

const PriceIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 7h6m-6 4h6m-6 4h6M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const PlaneIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const SchoolIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5z M5 11.5v4.5l7 4 7-4v-4.5"
    />
  </svg>
);

const HospitalIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

const UniversityIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5z M4 10l8 4 8-4"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 15v4M20 15v4"
    />
  </svg>
);

const ShoppingIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <CloudinaryImage
          src="crcmaest_n9llco"
          alt="CRC Maesta"
          width={1920}
          height={1080}
          priority
          quality={90}
          className="object-cover w-full h-full"
          sizes="100vw"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content Container */}
      <div className="relative h-full w-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-8 py-24 lg:py-16">
            {/* Left Column - Project Info */}
            <div className="w-full lg:w-1/2 text-white space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                CRC Maesta
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <LocationIcon className="w-6 h-6 flex-shrink-0" />
                  <p className="text-lg md:text-xl">Sector 63A, Gurugram</p>
                </div>
                <div className="flex items-center gap-3">
                  <PriceIcon className="w-6 h-6 flex-shrink-0" />
                  <p className="text-lg md:text-xl">
                    Starting from ₹1.12 Crores
                  </p>
                </div>
              </motion.div>

              {/* USPs Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 border-l-2 border-white/30 pl-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <PlaneIcon className="w-6 h-6 text-white flex-shrink-0" />
                    <p className="text-lg text-white/90">
                      <span className="text-white font-medium">
                        Hindon Airport
                      </span>{' '}
                      25.5 km
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <SchoolIcon className="w-6 h-6 text-white flex-shrink-0" />
                    <p className="text-lg text-white/90">
                      <span className="text-white font-medium">
                        Deshraj Public School
                      </span>{' '}
                      1 km
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <HospitalIcon className="w-6 h-6 text-white flex-shrink-0" />
                    <p className="text-lg text-white/90">
                      <span className="text-white font-medium">
                        Arogaya Hospital
                      </span>{' '}
                      4.6 km
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <UniversityIcon className="w-6 h-6 text-white flex-shrink-0" />
                    <p className="text-lg text-white/90">
                      <span className="text-white font-medium">
                        Maharishi University
                      </span>{' '}
                      10.7 km
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShoppingIcon className="w-6 h-6 text-white flex-shrink-0" />
                    <p className="text-lg text-white/90">
                      <span className="text-white font-medium">
                        Arihant Arcade
                      </span>{' '}
                      1.6 km
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full lg:w-1/2 max-w-md"
              id="contact-form"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
                <h2
                  className="text-2xl font-semibold text-gray-800 mb-6 text-center"
                  id="contact-form"
                >
                  Enquire Now for Amazing Deals!
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
