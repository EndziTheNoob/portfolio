import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { GiPencilBrush } from 'react-icons/gi';
import { LuGraduationCap } from 'react-icons/lu';
import taksmateImg from '@/public/taskmate.png';
import tictactoeImg from '@/public/tictactoe.png';
import underthestarsImg from '@/public/underthestars.png';

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
      'Simple fun to-do list app with an animated pixel character to make your day up.',
    tags: [
      'React',
      'Next.js',
      'Styled-Components',
      'Supabase',
      'Procreate',
      'Photoshop',
    ],
    imageUrl: taksmateImg,
  },
  {
    title: 'Tic-Tac-Toe',
    description:
      'Good old game where X is fighting O and user can play with computer thanks to API.',
    tags: ['Javascript', 'HTLM', 'CSS', 'API'],
    imageUrl: tictactoeImg,
  },
  {
    title: 'Under the stars',
    description:
      'My first try of booking website with a focus on learning coding basics and functional form.',
    tags: ['HTML', 'CSS', 'Javascript', 'PHP'],
    imageUrl: underthestarsImg,
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
