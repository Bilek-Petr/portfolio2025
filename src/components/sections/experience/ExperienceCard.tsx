import React from 'react';
import { ExperienceJob } from '@/types';

interface ExperienceCardProps {
  job: ExperienceJob;
}

export default function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <li className="py-8 border-b-2 border-light/20">
      <div className="flex justify-between">
        <span className="text-[1rem] font-medium italic">{job.period}</span>
        {job.company ? (
          <span className="text-[0.925rem] font-medium">
            {job.company}
            {job.location && <span>, {job.location}</span>}
          </span>
        ) : (
          <span className="text-[0.925rem] font-medium">{job.location}</span>
        )}
      </div>
      <h3 className="font-bold uppercase text-header-sm">{job.title}</h3>
    </li>
  );
}
