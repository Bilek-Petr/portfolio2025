import React from 'react';
import experienceData from '@/data/experience.json';
import { ExperienceData } from '@/types';
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle';
import ExperienceTimeline from '@/components/sections/experience/ExperienceTimeline';
import Button from '@/components/ui/button/regular/Button';

const typedExperienceData = experienceData as ExperienceData;

export default function Experience() {
  const { preheadline, headline, intro, experience, button } =
    typedExperienceData;
  return (
    <section
      id="experience"
      className="py-16 mt-10 bg-gradient-custom lg:mt-16 lg:rounded-e-2xl lg:py-28"
    >
      <div className="container grid gap-10 lg:grid-cols-[1fr,2fr] lg:gap-20">
        <div className="flex flex-col gap-6 lg:gap-12">
          <SectionTitle
            preheadline={preheadline}
            headline={headline}
            variant="light"
          />
          <p className="text-base-sm text-light/95">{intro}</p>
        </div>

        <div>
          <ExperienceTimeline experience={experience} />
        </div>
      </div>
    </section>
  );
}
