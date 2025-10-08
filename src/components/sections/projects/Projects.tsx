'use client';
import React, { useState } from 'react';
import projectsData from '@/data/projects.json';
import { ProjectsData } from '@/types';
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle';
import ProjectItem from '@/components/sections/projects/ProjectItem';
import Button from '@/components/ui/button/regular/Button';

const typedProjectsData = projectsData as ProjectsData;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProjects = typedProjectsData.items.slice(0, visibleCount);

  const handleToggleProjects = () => {
    setVisibleCount((prevCount) =>
      prevCount === 4 ? typedProjectsData.items.length : 4
    );
  };

  const { preheadline, headline, cta } = typedProjectsData;
  return (
    <section id="projects" className="container py-16 lg:py-28">
      <SectionTitle preheadline={preheadline} headline={headline} />
      <ul className="grid gap-14 py-14 lg:grid-cols-2">
        {visibleProjects.map((item, index) => (
          <ProjectItem key={index} item={item} />
        ))}
      </ul>
      <div className="flex justify-center">
        <Button
          onClick={handleToggleProjects}
          label={visibleCount === 4 ? cta.label : 'Show Less'}
          variant="primary"
        />
      </div>
    </section>
  );
}
