// Hero section
export interface HeroData {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

// About section
export interface AboutContact {
  type: string;
  label: string;
  icon: string;
}
export interface AboutExperience {
  years: string;
  description: string;
}
export interface AboutProjects {
  count: string;
  description: string;
}
export interface AboutCV {
  label: string;
  link: string;
}

export interface AboutData {
  headline: string;
  name: string;
  tagline: string;
  role: string;
  contact: AboutContact[];
  experience: AboutExperience;
  projects: AboutProjects;
  quote: string;
  cv: AboutCV;
}

// Experience section
export interface ExperienceJob {
  period: string;
  title: string;
  company: string;
  location: string;
}
export interface ExperienceResume {
  label: string;
  link: string;
}
export interface ExperienceData {
  headline: string;
  intro: string;
  jobs: ExperienceJob[];
  resume: ExperienceResume;
}

// Projects section
export interface ProjectItem {
  type: string;
  title: string;
  image: string;
  link: string;
}
export interface ProjectsCTA {
  label: string;
  link: string;
}
export interface ProjectsData {
  headline: string;
  items: ProjectItem[];
  cta: ProjectsCTA;
}

// Footer section
export interface FooterSocialLink {
  id: string;
  platform: string;
  description: string;
  url: string;
}
export interface FooterData {
  title: string;
  socialLinks: FooterSocialLink[];
}

// Navigation section
export interface NavigationMenuItem {
  label: string;
  url: string;
}
export interface NavigationSocialIcon {
  platform: string;
  src: string;
  url: string;
  alt: string;
}
export interface NavigationData {
  logo: string;
  menuItems: NavigationMenuItem[];
  socialIcons: NavigationSocialIcon[];
}
