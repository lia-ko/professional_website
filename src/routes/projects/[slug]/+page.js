import { error } from '@sveltejs/kit';
import { projects } from '$lib/projects.js';

export const prerender = true;

// Tell the static adapter which slugs to build.
export function entries() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export function load({ params }) {
  const project = projects[params.slug];
  if (!project) throw error(404, 'No such project');
  return { project };
}
