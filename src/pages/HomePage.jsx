import { memo } from 'react';
import { Hero } from '../components/sections/Hero';
import { ProblemStatement } from '../components/sections/ProblemStatement';
import {
  InfrastructureSection,
  PartnersSection,
  FeaturesShowcase,
  /* FoundersSection, */
  ResourcesSection,
  FinalCTA,
} from '../components/landing';

export const HomePage = memo(function HomePage({ onOpenModal }) {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <InfrastructureSection />
      <FeaturesShowcase />
      {/* <FoundersSection /> */}
      <PartnersSection />
      <ResourcesSection />
      <FinalCTA onOpenModal={onOpenModal} />
    </>
  );
});
