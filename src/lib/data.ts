import {
  HeroData,
  AboutData,
  ExperienceData,
  ProjectsData,
  FooterData,
  NavigationData,
} from '@/types';

import heroData from '@/data/hero.json';
import aboutData from '@/data/about.json';
import footerData from '@/data/footer.json';
import experienceData from '@/data/experience.json';
import projectsData from '@/data/projects.json';
import navigationData from '@/data/navigation.json';

export const getAboutData = (): AboutData => aboutData;
export const getFooterData = (): FooterData => footerData;
export const getHeroData = (): HeroData => heroData;
export const getExperienceData = (): ExperienceData => experienceData;
export const getProjectsData = (): ProjectsData => projectsData;
export const getNavigationData = (): NavigationData => navigationData;
