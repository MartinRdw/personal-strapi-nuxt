<template>
  <div class="mt-6">
    <p>todoa</p>
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
</style>
