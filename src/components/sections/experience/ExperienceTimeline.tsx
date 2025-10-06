import React from 'react';
import { ExperienceJob } from '@/types';
import ExperienceCard from './ExperienceCard';

interface ExperienceTimelineProps {
  experience: ExperienceJob[];
}

export default function ExperienceTimeline({
  experience,
}: ExperienceTimelineProps) {
  return (
    <ul className="flex flex-col text-light">
      {experience.map((job, index) => (
        <ExperienceCard key={index} job={job} />
      ))}
    </ul>
  );
}
