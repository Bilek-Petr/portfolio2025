import React from 'react';
import { AboutContact } from '@/types';
import { IconCircle } from '@/components/ui/iconCircle/IconCircle';

interface ContactItemProps {
  contactInfo: AboutContact;
}

export default function ContactItem({ contactInfo }: ContactItemProps) {
  return (
    <li className="flex items-center gap-3">
      <IconCircle
        icon={contactInfo.icon}
        alt={contactInfo.label}
        size="sm"
        variant="medium"
      />
      <span className="text-base-sm font-bold italic text-accent">
        {contactInfo.label}
      </span>
    </li>
  );
}
