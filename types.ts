import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}