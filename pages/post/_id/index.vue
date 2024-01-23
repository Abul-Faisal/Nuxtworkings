<template>
  <div class="post-content-container">
    <div>
      <h1>This is post no {{ post.userid }}</h1>
    </div>
    <hr />
    <div>
      <span>Desc: {{ post.userdescription }}</span>
    </div>
    <div>
      <span>Author: {{ post.userauthor }}</span>
    </div>
    <hr />
    <div>
      <span>{{ post.usercontent }}</span>
    </div>
    <hr />
    <div>
      <span>Content Updated on {{ post.updateddate }}</span>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Post " + this.post.userid,
    };
  },
  layout: "postpages",

  async asyncData(context) {
    let post;
    console.log("post reference id-", context.params.id);
    await context.$axios
      .get(
        "https://nuxtbasics-default-rtdb.firebaseio.com/posts/" +
          context.params.id +
          ".json"
      )
      .then((res) => {
        console.log(res.data);
        post = res.data;
        console.log(post);
      })
      .catch((e) => context.error(e));
    return {
      post,
    };
  },
};
</script>
<style scoped>
.post-content-container {
  text-align: center;
}
</style>
