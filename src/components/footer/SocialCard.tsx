import React from 'react';
import { FooterSocialLink } from '@/types';
import { ArrowUpRight } from 'lucide-react';

interface SocialCardProps {
  socialLink: FooterSocialLink;
}

export default function SocialCard({ socialLink }: SocialCardProps) {
  return (
    <li className="relative min-w-[250px] flex-1">
      <a
        href={socialLink.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col h-full px-8 py-4 overflow-hidden border-none group bg-light lg:py-6"
      >
        <div className="absolute inset-0 w-[100%] translate-x-[-100%] bg-gradient-custom transition-transform duration-500 ease-out group-hover:translate-x-0" />
        <span className="relative flex justify-between">
          <span className="relative flex flex-col">
            <span className="leading-none text-base-md text-accent/50">
              {socialLink.id}
            </span>
            <span className="font-bold leading-none transition-colors duration-300 ease-out text-header-sm group-hover:text-accent/80 group-hover:underline">
              {socialLink.platform}
            </span>
          </span>
          <ArrowUpRight className="absolute right-6 top-6 h-[clamp(3.5rem,5vw,4.5rem)] w-[clamp(3.5rem,5vw,4.5rem)] text-transparent transition-colors [transition:right_400ms,top_400ms] group-hover:right-0 group-hover:top-0 group-hover:text-light/80" />
        </span>

        <span className="relative z-10 block pt-6 text-base-sm text-accent/80">
          {socialLink.description}
        </span>
      </a>

      <div className="absolute left-0 top-0 h-full w-[0.125rem] bg-gradient-start" />
    </li>
  );
}
