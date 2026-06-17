/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyTranceform from "./components/WhyTranceform";
import StickyCTA from "./components/StickyCTA";
import Footer from "./components/Footer";

// Lazy load below-the-fold components for better initial load performance
const MembershipPlans = lazy(() => import("./components/MembershipPlans"));
const TrainerTeam = lazy(() => import("./components/TrainerTeam"));
const GoogleReviews = lazy(() => import("./components/GoogleReviews"));
const PhotoGallery = lazy(() => import("./components/PhotoGallery"));
const FreeTrialBooking = lazy(() => import("./components/FreeTrialBooking"));
const LocationSection = lazy(() => import("./components/LocationSection"));
const InstagramSection = lazy(() => import("./components/InstagramSection"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-plus-jakarta antialiased selection:bg-brand-orange selection:text-white">
      
      {/* Premium Blur Navbar */}
      <Navbar />

      {/* Main Structural Page Flow */}
      <main className="flex-grow flex flex-col">
        {/* SECTION 1 - HERO */}
        <HeroSection />

        {/* SECTION 2 - WHY TRANCEFORM */}
        <WhyTranceform />

        {/* SECTION 3 - PLANS */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <MembershipPlans />
        </Suspense>

        {/* SECTION 4 - TRAINERS */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <TrainerTeam />
        </Suspense>

        {/* SECTION 5 - TESTIMONIALS */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <GoogleReviews />
        </Suspense>

        {/* SECTION 6 - GALLERY */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <PhotoGallery />
        </Suspense>

        {/* SECTION 7 - FREE TRIAL BOOKING */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <FreeTrialBooking />
        </Suspense>

        {/* SECTION 8 - LOCATION */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <LocationSection />
        </Suspense>

        {/* SECTION 9 - INSTAGRAM */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <InstagramSection />
        </Suspense>

        {/* SECTION 10 - FINAL CTA */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <FinalCTA />
        </Suspense>
      </main>

      {/* FOOTER SECTION */}
      <Footer />

      {/* FLOATING CONVERSION STICKY WIDGETS */}
      <StickyCTA />
      
    </div>
  );
}
