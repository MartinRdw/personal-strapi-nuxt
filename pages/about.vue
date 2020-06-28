<template>
  <div id="about">
    <div class="mb-8">
      <p>
        My name is Martin, I'm an engineering student and software developer.
      </p>
      <p>
        I'm currently splitting my time between my work/study program at
        <a href="https://ece.fr" target="_blank">ECE Paris</a> and
        <a href="https://worldline.com" target="_blank">Worldline</a> and my own
        projects. I also do a small amount of selective freelance work mainly as
        Laravel/Vue.js developer.
      </p>
      <p>
        I’m also an indie maker that built SAAS projects. My focus is currently
        on <a href="https://carlapp.co" target="_blank">Carl</a>.
      </p>
    </div>
    <div class="mt-4">
      <p>Find me here:</p>
      <table>
        <tr>
          <td class="w-20">
            Twitter:
          </td>
          <td>
            <a href="https://twitter.com/@martin_riedweg" target="_blank">@martin_riedweg</a>
          </td>
        </tr>
        <tr>
          <td>
            Medium:
          </td>
          <td>
            <a href="https://medium.com/@martin.riedweg" target="_blank">@martin.riedweg</a>
          </td>
        </tr>
        <tr>
          <td>
            Github:
          </td>
          <td>
            <a href="https://github.com/MartinRdw" target="_blank">MartinRdw</a>
          </td>
        </tr>
        <tr>
          <td>
            Gitlab:
          </td>
          <td>
            <a href="https://gitlab.com/martin.riedweg" target="_blank">martin.riedweg</a>
          </td>
        </tr>
        <tr>
          <td>
            Linkedin:
          </td>
          <td>
            <a
              href="https://www.linkedin.com/in/martin-riedweg-725bb5109/"
              target="_blank"
            >Martin Riedweg</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import projectsQuery from "~/apollo/queries/project/projects"

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
  @apply mt-6 text-gray-700;
}

#about p {
  @apply mb-4;
}

#about li {
  @apply mb-1;
}

#about a {
  @apply text-indigo-500 bg-indigo-100;
}

#about a:hover {
  @apply text-white bg-indigo-500;
}
</style>
