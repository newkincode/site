import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
	  adapter: adapter({
		edge: true,
		split: false
	  })
	}
  };
  
