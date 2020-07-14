<template>
  <div class="max-w-2xl mx-auto mt-6">
    <Posts :posts="posts" />
  </div>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts'
import Posts from '~/components/Posts'

export default {
  components: {
    Posts
  },
  data() {
    return {
      posts: []
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
