'use client';
import React from 'react';
import AboutProfile from './AboutProfile';
import aboutData from '@/data/about.json';
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle';
import DownloadCTA from '@/components/ui/button/downloadCTA/DownloadCTA';
import ContactList from '@/components/sections/about/ContactList';
import BioItem from '@/components/sections/about/BioItem';
import QuoteBlock from '@/components/sections/about/QuoteBlock';
import { AboutData } from '@/types';
import MotionSectionReveal from '@/components/shared/animations/MotionSectionReveal';

const typedAboutData = aboutData as AboutData;

export default function About() {
  const {
    preheadline,
    headline,
    name,
    tagline,
    image,
    imageAlt,
    cv,
    contact,
    bio,
    quote,
  } = typedAboutData;

  return (
    <>
      <MotionSectionReveal id="about" className="container py-10">
        <SectionTitle preheadline={preheadline} headline={headline} />

        <div className="flex flex-col items-center gap-10 pt-10 lg:gap-28 lg:pt-20 2xl:flex-row">
          <div
            aria-label="Profile details"
            className="flex flex-col items-center"
          >
            <AboutProfile
              name={name}
              tagline={tagline}
              image={image}
              imageAlt={imageAlt}
            />
            <DownloadCTA cvPath={cv.link} label={cv.label} />
          </div>

          <div aria-label="More about me" className="flex-1">
            <ContactList
              contacts={contact}
              className="grid grid-cols-1 gap-2 xs:grid-cols-2 md:gap-5"
            />

            <hr className="my-8 border-t border-accent/20" />

            <div className="flex flex-col gap-6 sm:flex-row">
              {bio.map((bioItem, index) => (
                <BioItem key={index} bioInfo={bioItem} />
              ))}
            </div>

            <QuoteBlock quote={quote} />
          </div>
        </div>
      </MotionSectionReveal>
    </>
  );
}
