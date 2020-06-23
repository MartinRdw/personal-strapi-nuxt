<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="mb-6">
      <router-link :to="{ name: 'posts-id', params: {id: post.slug} }">
        <p class="text-xl font-bold">
          {{ post.title }}
        </p>
        <p class="text-gray-700 mt-1">
          {{ post.preview }}
        </p>
        <p class="text-xs text-gray-500 text-sm mt-1">
          {{ moment(post.published_at).format("MMM D, YYYY") }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
var moment = require('moment')

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      moment: moment
    }
  },
  computed: {}
}
</script>
