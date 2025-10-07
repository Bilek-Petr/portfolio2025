'use client';
import React from 'react';
import { HexGrid, Layout } from 'react-hexgrid';
import { ToolItem as ToolItemType } from '@/types';
import ToolItem from '@/components/sections/techstack/ToolItem';

interface ToolListProps {
  tools: ToolItemType[];
}

export default function ToolList({ tools }: ToolListProps) {
  return (
    <HexGrid width={1200} height={800}>
      <Layout size={{ x: 10, y: 10 }} flat={false} spacing={1}>
        {tools.map((tool, index) => (
          <ToolItem key={index} tool={tool} />
        ))}
      </Layout>
    </HexGrid>
  );
}
