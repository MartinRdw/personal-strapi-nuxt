<template>
  <div id="about">
    <p>My name is Martin, I'm an engineering student and software developer.</p>
    <p>I'm currently splitting my time between my work/study program at <a href="https://ece.fr" target="_blank">ECE Paris</a> and <a href="https://worldline.com" target="_blank">Worldline</a> and my own projects. I also do a small amount of selective freelance work mainly as Laravel/Vue.js developer.</p>
    <p>I’m also an indie maker that built SAAS projects. My focus is currently on <a href="https://carlapp.co" target="_blank">Carl</a>.</p>
  </div>
</template>

<script>
import projectsQuery from '~/apollo/queries/project/projects'

export default {
  components: {},
  data() {
    return {
      projects: [],
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    projects: {
      prefetch: true,
      query: projectsQuery
    }
  }
}
</script>

<style>
#about {
  @apply mt-6 text-gray-700
}

#about p {
  @apply mb-4
}

#about a {
  @apply text-indigo-500 bg-indigo-100;
}

#about a:hover {
  @apply text-white bg-indigo-500
}
</style>
