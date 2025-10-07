import React from 'react';
import { Hexagon, Text } from 'react-hexgrid';
import { ToolItem as ToolItemType } from '@/types';

interface ToolItemProps {
  tool: ToolItemType;
}

export default function ToolItem({ tool }: ToolItemProps) {
  return (
    <g className="rotate-[30deg]">
      <Hexagon
        q={tool.q}
        r={tool.r}
        s={tool.s}
        fill="white"
        stroke="rgba(255, 255, 255, 0.6)"
        strokeWidth={0.5}
      >
        <svg
          x="-10.5"
          y="-10.5"
          width="20"
          height="20"
          className="-rotate-[30deg]"
        >
          <image
            href={tool.icon}
            width="10"
            height="10"
            x="5.5"
            y="5.5"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </svg>
      </Hexagon>
    </g>
  );
}
