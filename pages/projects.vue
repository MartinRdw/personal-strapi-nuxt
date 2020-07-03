<template>
  <div class="mt-6">
    <div v-for="(project, i) in projects" :key="i" class="project mb-6" :class="{'border-b': (i + 1) !== projects.length}">
      <div class="flex mb-6">
        <h2>{{ project.title }}</h2> <a class="self-end ml-2 mb-1 link" :href="`https://${project.url}`" target="_blank">({{ project.url }})</a>
      </div>
      <div>
        <img class="h-20 w-auto" :src="project.logo.url" alt="">
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="project.content" class="editor" v-html="md.render(project.content)" />
    </div>
  </div>
</template>

<script>
import projectsQuery from '~/apollo/queries/project/projects'
var md = require('markdown-it')()

var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options)
}

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  tokens[idx].attrPush(['target', '_blank'])
  return defaultRender(tokens, idx, options, env, self)
}

export default {
  components: {},
  data() {
    return {
      projects: [],
      api_url: process.env.strapiBaseUri,
      md: md
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
  .project h2 {
    @apply text-2xl font-semibold text-gray-900;
  }

  .project p {
    @apply mb-6;
  }

  .project img {
    @apply my-6;
  }

  .project .editor > p:first-child {
    @apply font-semibold text-gray-700;
  }

  .project a.link {
    @apply text-indigo-500 bg-indigo-100;
  }

  .project a.link:hover {
    @apply text-white bg-indigo-500
  }

  .project a {
    @apply text-indigo-500;
  }

  .project a:hover {
    @apply text-indigo-600
  }
</style>
