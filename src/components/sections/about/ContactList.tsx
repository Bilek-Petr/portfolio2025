import React from 'react';
import ContactItem from './ContactItem';
import { AboutContact } from '@/types';

interface ContactListProps {
  contacts: AboutContact[];
  className?: string;
}

export default function ContactList({ contacts, className }: ContactListProps) {
  return (
    <ul className={className}>
      {contacts.map((item) => (
        <ContactItem key={item.type} contactInfo={item} />
      ))}
    </ul>
  );
}
