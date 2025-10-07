import React from 'react';
import techstackData from '@/data/techstack.json';
import { TechstackData } from '@/types';
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle';
import ToolList from '@/components/sections/techstack/ToolList';

const typedTechstackData = techstackData as TechstackData;

export default function Techstack() {
  const { preheadline, headline, tools } = typedTechstackData;

  return (
    <section
      id="techstack"
      className="py-16 mt-10 bg-gradient-custom lg:mt-16 lg:rounded-e-2xl lg:py-28"
    >
      <div className="container">
        <SectionTitle
          preheadline={preheadline}
          headline={headline}
          variant="light"
        />
        <ToolList tools={tools} />
      </div>
    </section>
  );
}
