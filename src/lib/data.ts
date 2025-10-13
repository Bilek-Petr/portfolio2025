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
import projectsDataJson from '@/data/projects.json';
import navigationData from '@/data/navigation.json';

export const getProjectsData = (): ProjectsData =>
  projectsDataJson as ProjectsData;

export const getAboutData = (): AboutData => aboutData;
export const getFooterData = (): FooterData => footerData;
export const getHeroData = (): HeroData => heroData;
export const getExperienceData = (): ExperienceData => experienceData;
export const getNavigationData = (): NavigationData => navigationData;
