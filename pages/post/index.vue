<template>
  <div>
    <h1>This is Posts page</h1>
    <hr />
    <p>These are The posts Which are currently available!!!</p>
    <br />
    <br />
    <postslink :isArray="post" />
  </div>
</template>

<script>
export default {
  head: {
    title: "Posts",
  },
  computed: {
    post() {
      return this.$store.getters.post;
    },
  },
  layout: "postpages",
};
</script>
<style scoped>
div {
  text-align: center;
}
</style>
