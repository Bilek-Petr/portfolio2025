// Hero section
export interface HeroData {
  title: string;
  name: string;
  occupation: string;
  subtitle: string;
  btnText: string;
  btnLink: string;
  profileImage: string;
  profileAlt: string;
}

// About section
export interface AboutContact {
  type: string;
  label: string;
  icon: string;
}
export interface AboutBio {
  amount: string;
  unit: string;
  description: string;
}
export interface AboutCV {
  label: string;
  link: string;
}

export interface AboutData {
  preheadline: string;
  headline: string;
  image: string;
  imageAlt: string;
  name: string;
  tagline: string;
  role: string;
  contact: AboutContact[];
  bio: AboutBio[];
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

export interface ExperienceData {
  preheadline: string;
  headline: string;
  intro: string;
  experience: ExperienceJob[];
  button: {
    label: string;
    link: string;
  };
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
  preheadline: string;
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
