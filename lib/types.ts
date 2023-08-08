import { links } from './data';

//separate file for defining types
export type SectionName = (typeof links)[number]['name'];
