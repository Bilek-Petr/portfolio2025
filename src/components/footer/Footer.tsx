import React from 'react';
import footerData from '@/data/footer.json';
import { FooterData } from '@/types';
import SectionTitle from '../shared/sectionTitle/SectionTitle';
import SocialCard from './SocialCard';

const typedFooterData = footerData as FooterData;

export default function Footer() {
  const { preheadline, headline, socialLinks } = typedFooterData;
  return (
    <footer className="container py-16 lg:py-28">
      <SectionTitle preheadline={preheadline} headline={headline} />
      <div>
        <ul className="grid auto-rows-fr grid-cols-1 gap-6 pt-14 sm:grid-cols-2 xl:grid-cols-3 [&>*:last-child]:sm:col-span-2 xl:[&>*:last-child]:col-span-1">
          {socialLinks.map((link) => (
            <SocialCard key={link.id} socialLink={link} />
          ))}
        </ul>
      </div>
    </footer>
  );
}
