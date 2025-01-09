'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Home, MapPin, Leaf, Shield } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => (
  <motion.div
    variants={fadeIn}
    className="p-6 rounded-2xl border bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function AboutUs() {
  return (
    <Section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-background/50"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-primary mb-4">
            <span className="h-px w-12 bg-primary"></span>
            <span className="text-sm font-medium uppercase tracking-wider">
              About The Project
            </span>
            <span className="h-px w-12 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            CRC Maesta
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            An upscale residential masterpiece by CRC Group on Noida Expressway,
            where luxury meets serenity
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={fadeIn}
          className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground mb-16"
        >
          <p>
            CRC Maesta redefines luxury living with spacious residential
            properties starting from 1,700 sq. ft., with prices beginning at
            ₹2.40 cr. This prestigious development represents an exceptional
            living space in one of Noida&apos;s most prime locations.
          </p>
          <p>
            The project features innovative architecture and high-class
            construction, perfect for families seeking a serene yet
            well-connected lifestyle. Its strategic location on the Noida
            Expressway ensures seamless connectivity to all major hubs in
            Delhi-NCR, with proximity to schools, hospitals, shopping centers,
            and entertainment zones.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={fadeIn}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <FeatureCard
            icon={Home}
            title="Luxury Living"
            description="Spacious residential properties starting from 1,700 sq. ft., designed for comfortable family living"
          />
          <FeatureCard
            icon={MapPin}
            title="Prime Location"
            description="Strategic location on Noida Expressway with excellent connectivity to Delhi-NCR"
          />
          <FeatureCard
            icon={Shield}
            title="World-Class Amenities"
            description="State-of-the-art clubhouse, swimming pool, fitness centers, and landscaped gardens"
          />
          <FeatureCard
            icon={Leaf}
            title="Eco-Friendly"
            description="Energy-efficient systems and sustainable design for environmentally conscious living"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeIn} className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            CRC Maesta is your gateway to sophisticated living and a smart
            investment choice for those seeking luxury homes in Noida.
            Experience the perfect blend of comfort and elegance.
          </p>
          <Link
            href="#hero"
            className="inline-block mt-6 px-8 py-3 bg-primary text-white rounded-full
            hover:bg-primary/90 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
