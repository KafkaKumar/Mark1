import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GalleryShowcase } from './components/GalleryShowcase';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { TestimonialSection } from './components/TestimonialSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { ProjectItem } from './data/projects';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState<{
    projectType?: string;
    notes?: string;
    estimatedBudget?: string;
  }>({});

  const handleOpenBooking = () => {
    setBookingInitialData({});
    setBookingModalOpen(true);
  };

  const handleSelectProjectForConsultation = (project: ProjectItem) => {
    setBookingInitialData({
      projectType: project.categoryLabel,
      notes: `Interested in replicating the design language and finish style of "${project.title}" (${project.style}).`,
    });
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f4f2] selection:bg-[#c5a880]/30 selection:text-white flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Dynamic Project Gallery Showcase */}
        <GalleryShowcase
          onSelectProjectForConsultation={handleSelectProjectForConsultation}
        />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider />

        {/* Client Testimonies, Reviews & Video Walkthroughs */}
        <TestimonialSection />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Universal Consultation Booking Modal */}
      <ConsultationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />
    </div>
  );
}
