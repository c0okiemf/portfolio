import configJson from '@/assets/config.json';

export interface Project {
  tags: string[];
  title: string;
  url: string;
  image?: string;
}

interface SocialItem {
  label: string;
  url: string;
}

interface Config {
  projects: Project[];
  social: SocialItem[];
  email: string | undefined;
  avatar: string | undefined;
}

export const useConfig = (): Config => {
  return {
    projects: configJson.projects ?? [],
    social: configJson.social ?? [],
    email: configJson.email,
    avatar: configJson.avatar
  };
};
