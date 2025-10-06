import React from 'react';
import Image from 'next/image';
import type { ProjectItem } from '@/types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectItemProps {
  item: ProjectItem;
}

export default function ProjectItem({ item }: ProjectItemProps) {
  return (
    <li>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <article className="flex gap-6 space-between">
          <header className="flex flex-col justify-between max-w-56">
            <div>
              <span className="italic font-medium text-base-md">
                {item.type} Project
              </span>
              <h3 className="font-bold text-header-sm">{item.title}</h3>
            </div>
            <ArrowUpRight className="h-[clamp(2.5rem,5vw,4rem)] w-[clamp(2.5rem,5vw,4rem)]" />
          </header>
          <figure className="flex-1">
            <Image src={item.image} alt={item.title} width={315} height={250} />
          </figure>
        </article>
      </a>
    </li>
  );
}
