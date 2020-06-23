<template>
  <div class="mt-6 post">
    <div v-if="$apollo.loading">
          loading
    </div>
    <div v-else>
      <h1>
        {{ postBySlug.title }}
      </h1>

      <div class="mt-10">
        <p>
          {{ moment(postBySlug.published_at).format("MMM D, YYYY") }} ({{ postBySlug.minutes_read }} min read)
        </p>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div id="editor" v-html="$md.render(formatPostContent(postBySlug.content))" />
      </div>
    </div>
  </div>
</template>

<script>
import postQuery from '~/apollo/queries/post/post'
var moment = require('moment')

export default {
  data() {
    return {
      postBySlug: {},
      moment: moment,
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    postBySlug: {
      prefetch: true,
      query: postQuery,
      variables () {
        return { slug: this.$route.params.id }
      }
    }
  },
  methods: {
    formatPostContent(content) {
      const searchRegExp = /\/uploads/g
      const replaceWith = `${this.api_url}/uploads`
      return content.replace(searchRegExp, replaceWith)
    }
  }
}
</script>

<style>
  .post {
    @apply mb-6;
  }

  .post p, .post pre {
    @apply mb-6;
  }

  .post h1 {
    @apply border-b-8 border-indigo-200 text-4xl leading-12 font-bold text-gray-900 relative p-0 m-0 inline;
  }

  .post h2 {
    @apply text-2xl font-semibold text-gray-900 mb-6;
  }

  .post a {
    @apply text-indigo-500 bg-indigo-100;
  }

  .post a:hover {
    @apply text-white bg-indigo-500
  }

  .post blockquote {
    @apply text-gray-600 text-sm text-center -mt-4;
  }

  .post p > code {
    @apply bg-gray-300;
  }

  .post ul {
    @apply list-disc mb-6;
    padding-left: 20px;
  }
</style>
