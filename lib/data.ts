import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { GiPencilBrush } from 'react-icons/gi';
import { LuGraduationCap } from 'react-icons/lu';
import taskmateImg from '@/public/taskmate.png';
import tictactoeImg from '@/public/tictactoe.png';
import underthestarsImg from '@/public/underthestars.png';
import about_taskmateImg from '@/public/about_taskmate.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'PR & Marketing',
    location: 'FleishmanHillard',
    description:
      'As a leader of a PR team focused on technology brands I worked on content creation and strategic communication including project management and budgeting.',
    icon: React.createElement(CgWorkAlt),
    date: '2018 - 2022',
  },
  {
    title: 'Concept Art & Game Design',
    location: 'DrawPlanet, GameDevHub',
    description:
      'Improved myself in digital drawing with a graphical tablet and explored backgrounds of games production. I learned how to prepare and use documentation, what precedes the production itself, how to define features, levels, importance of narrative and game logic.',
    icon: React.createElement(GiPencilBrush),
    date: '2022',
  },
  {
    title: 'Frontend Development',
    location: 'Czechitas Digital Academy',
    description:
      'After 300+ hours I finished a frontend academy focused on React with the final project Taskmate. In 200+ hours I learned basics and prerequisities with Codecademy.com and freeCodeCamp.com.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Taskmate',
    description:
      'Enjoy a simple and fun to-do list app featuring an animated pixel character that adds a touch of delight to your day.',
    tags: [
      'React',
      'Next.js',
      'Styled-Components',
      'Supabase',
      'Procreate',
      'Photoshop',
    ],
    imageUrl: taskmateImg,
    githubUrl: 'https://github.com/EndziTheNoob/taskmate',
  },
  {
    title: 'About Taskmate',
    description:
      "Explore a dedicated page for the Czechitas final project, Taskmate. Here, you can delve deeper into the project's goals, characters, and creators.",
    tags: ['React', 'Procreate', 'Photoshop'],
    imageUrl: about_taskmateImg,
    githubUrl: 'https://github.com/EndziTheNoob/o-projektu-taskmate',
  },
  {
    title: 'Tic-Tac-Toe',
    description:
      'Experience the classic game where X battles O, allowing users to play against the computer with the help of an API.',
    tags: ['Javascript', 'HTLM', 'CSS', 'API'],
    imageUrl: tictactoeImg,
    githubUrl: 'https://github.com/EndziTheNoob/piskvorky',
  },
  {
    title: 'Under the stars',
    description:
      "Explore my initial attempt at a booking website, which emphasizes learning coding fundamentals and creating functional forms. Yes, it's not much but it's an honest work.",
    tags: ['HTML', 'CSS', 'Javascript', 'PHP'],
    imageUrl: underthestarsImg,
    githubUrl: 'https://github.com/EndziTheNoob/Web_UnderTheStars',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'Styled-Components',
  'Tailwind',
  'Figma',
  'Procreate',
  'Photoshop',
] as const;
