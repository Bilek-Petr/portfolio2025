'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '@/data/projects.json';
import { ProjectsData } from '@/types';
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle';
import ProjectItem from '@/components/sections/projects/ProjectItem';
import Button from '@/components/ui/button/regular/Button';
import { projectAnimations } from './projects.animations';
import MotionSectionReveal from '@/components/shared/animations/MotionSectionReveal';
import { useItemsVisibility } from '@/hooks/useItemsVisibility';

const typedProjectsData = projectsData as ProjectsData;

export default function Projects() {
  const { preheadline, headline, cta, items } = typedProjectsData;
  const { visibleCount, isCollapsing, toggle } = useItemsVisibility(
    4,
    items.length,
    projectAnimations.exitAnimationDuration
  );

  return (
    <MotionSectionReveal id="projects" className="container py-16 lg:py-28">
      <SectionTitle preheadline={preheadline} headline={headline} />
      <div className="grid gap-14 py-14 lg:grid-cols-2">
        {/* First 4 items - no animation */}
        {typedProjectsData.items.slice(0, 4).map((projectItem, index) => (
          <div key={index}>
            <ProjectItem item={projectItem} />
          </div>
        ))}

        <AnimatePresence initial={false}>
          {!isCollapsing &&
            typedProjectsData.items
              .slice(4, visibleCount)
              .map((projectItem, index) => (
                <motion.div
                  key={index + 4}
                  initial={projectAnimations.item.initial}
                  animate={projectAnimations.item.animate(index)}
                  exit={projectAnimations.item.exit}
                >
                  <ProjectItem item={projectItem} />
                </motion.div>
              ))}
        </AnimatePresence>
      </div>
      <motion.div
        layout={projectAnimations.button.layout}
        transition={projectAnimations.button.transition}
        className="flex justify-center"
      >
        <Button
          onClick={toggle}
          label={visibleCount === 4 ? cta.label : 'Show Less'}
          variant="primary"
        />
      </motion.div>
    </MotionSectionReveal>
  );
}
