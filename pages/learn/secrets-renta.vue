<template>
  <div class="max-w-2xl mx-auto">
    <iframe width="560" height="350" :src="url" frameborder="0" allowfullscreen />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://martin-riedweg.s3.eu-west-3.amazonaws.com/videos/Les+secrets+de+la+rentabilite%CC%81.mp4"
    }
  }
}
</script>
