import { Component } from '@angular/core';

export interface IMyProject {
  name: string;
  description: string;
  tags: string[];
  demoPath?: string;
  codeURL: string;
  featured?: boolean;
  isNew?: boolean;
}

@Component({
  selector: 'app-my-projects-demo',
  templateUrl: './my-projects-demo.component.html',
  styleUrls: ['./my-projects-demo.component.scss']
})
export class MyProjectsDemoComponent {

  myprojects: IMyProject[] = [
    {
      name: 'GayBar',
      description:
        'Ukrainian cocktail companion — 274 recipes with offline-first storage, a party planner and a "my bar" inventory that tells you what you can make right now.',
      tags: ['React Native', 'Expo', 'TypeScript'],
      demoPath: 'https://antonlomovatskyi.github.io/gaybar/',
      codeURL: 'https://github.com/AntonLomovatskyi/gaybar',
      featured: true,
      isNew: true,
    },
    {
      name: 'CookingMonsta',
      description:
        'Paste a YouTube cooking video and Claude extracts a clean, structured recipe — ingredients, steps and timings. AI-powered, deployed to the edge.',
      tags: ['React', 'Vite', 'Firebase', 'Claude AI'],
      demoPath: 'https://antonlomovatskyi.github.io/cookingmonsta/',
      codeURL: 'https://github.com/AntonLomovatskyi/cookingmonsta',
      featured: true,
      isNew: true,
    },
    {
      name: 'UA Army Recruitment Website',
      description:
        'Production recruitment platform for a Ukrainian Armed Forces unit, built for high traffic and fast, accessible content delivery.',
      tags: ['React', 'TypeScript'],
      demoPath: 'https://www.fort92tro.com.ua/',
      codeURL: 'https://github.com/AntonLomovatskyi/fort92tro',
      featured: true,
    },
    {
      name: 'This Portfolio',
      description:
        'The site you are on — an Angular micro-frontend orchestrated by a single-spa root config, deployed to GitHub Pages.',
      tags: ['Angular', 'single-spa', 'TypeScript'],
      demoPath: '/',
      codeURL: 'https://github.com/AntonLomovatskyi/portfolio-landing-page',
    },
    {
      name: 'JoJo Stand Battle Game',
      description:
        'A turn-based browser battle game themed around JoJo\'s Bizarre Adventure stands, with animated combat and a custom stat system.',
      tags: ['React', 'Game'],
      demoPath: 'https://antonlomovatskyi.github.io/jojo-mini-game',
      codeURL: 'https://github.com/AntonLomovatskyi/jojo-mini-game',
    },
    {
      name: 'JoJo Wiki API',
      description:
        'A RESTful wiki-style API serving JoJo character data, with paginated endpoints and a clean resource layout.',
      tags: ['NodeJS', 'REST API'],
      demoPath: 'https://jojo-api.onrender.com/api/v1/characters',
      codeURL: 'https://github.com/AntonLomovatskyi/portfolio-jojo-backend-api',
    },
  ];

  get featuredProjects(): IMyProject[] {
    return this.myprojects.filter((p) => p.featured);
  }

  get otherProjects(): IMyProject[] {
    return this.myprojects.filter((p) => !p.featured);
  }
}
