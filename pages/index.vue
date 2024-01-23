<template>
  <header>
    <h1>Welcome!!! to <b>Posts</b> app</h1>
    <p>Hi!!! Welcome to Main Menu</p>
    <postslink :isArray="post" />
  </header>
</template>
<script>
// import postslink from "~/components/posts/postslink.vue";
export default {
  head: {
    title: "Home",
  },
  computed: {
    post() {
      return this.$store.getters.post;
    },
  },
  layout: "postpages",
  // components: {
  //   postslink,
  // },
};
</script>

<style scoped>
header {
  position: relative;
  height: 600px;
  background-image: url("~assets/images/introimage.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  color: chocolate;
}
</style>
