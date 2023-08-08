import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
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
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
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
    title: 'Senior Client Manager',
    location: 'FleishmanHillard',
    description:
      'As a leader of PR team focused on technology brands I worked on content creation and strategic communication including project management and budgeting.',
    icon: React.createElement(CgWorkAlt),
    date: '2018 - 2022',
  },
  {
    title: 'Product Manager',
    location: 'Seznam.cz',
    description:
      'My step into the world of technology as a product manager of search engine crawler in favorite Czech browser.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Smart Templates Creator',
    location: 'PwC',
    description:
      'As a part of Document Automation Team I work on creation of templates for internal app Document Bot.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - present',
  },
  {
    title: 'Junior Frontend Developer',
    location: 'Czechitas Digital Academy',
    description:
      'After 300+ hours I finished intense frontend academy focused on React with final project Taskmate.',
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
