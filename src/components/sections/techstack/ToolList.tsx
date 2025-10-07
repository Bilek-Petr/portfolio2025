'use client';
import React from 'react';
import { ToolItem as ToolItemType } from '@/types';
import ToolItem from './ToolItem';

interface ToolListProps {
  tools: ToolItemType[];
}

export default function ToolList({ tools }: ToolListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 pt-16 pb-4 lg:justify-start">
      {tools.map((tool, index) => (
        <ToolItem key={index} tool={tool} />
      ))}
    </div>
  );
}
