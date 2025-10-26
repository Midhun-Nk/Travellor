import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Bus,
  Car,
  Users,
  Briefcase,
  Heart,
  Mountain,
  Hotel,
  Globe,
  Sun,
  Star,
  Facebook,
  Instagram,
  Youtube,
  MoveRight,
  Search,
  Contact,
} from 'lucide-react';
// --- Data Arrays ---
export const servicesData = [
  {
    icon: Users,
    title: "Group Tour Packages",
    desc: "Perfect for schools, colleges, and large family trips. We handle all the logistics."
  },
  {
    icon: Briefcase,
    title: "Customised Domestic Tours",
    desc: "Your trip, your way. We build a personalized itinerary just for you."
  },
  {
    icon: Globe,
    title: "Foreigners Tour Packages",
    desc: "Specialized inbound tours to explore the best of India, tailored for international guests."
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    desc: "Create unforgettable memories in romantic destinations."
  },
  {
    icon: Hotel,
    title: "Resort & Hotel Booking",
    desc: "Get the best rates on a wide range of accommodations, from budget to luxury."
  },
  {
    icon: Sun,
    title: "Holiday Packages",
    desc: "All-inclusive holiday deals to popular destinations. Just pack your bags!"
  },
  {
    icon: Star,
    title: "Luxury Vacations",
    desc: "Experience travel in ultimate comfort and style with our premium packages."
  },
  {
    icon: Mountain,
    title: "Trekking & Tent Camping",
    desc: "For the adventurers. Explore nature trails and camp under the stars."
  }
];

export const fleetData = [
  {
    icon: Bus,
    title: "Buses",
    desc: "49 Seater\n34 Seater"
  },
  {
    icon: Users,
    title: "Travellers",
    desc: "10 Seater\n12 Seater\n17 Seater\n19 Seater\n26 Seater"
  },
  {
    icon: Car,
    title: "Cars & SUVs",
    desc: "Innova\nHycross\nRumion"
  }
];
