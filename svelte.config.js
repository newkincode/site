import adapter from '@sveltejs/adapter-netlify';

// svelte.config.js
export default {
	kit: {
	  adapter: adapter({
		edge: false,
		split: true
	  })
	}
  };
 