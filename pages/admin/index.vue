<template>
  <div class="admin">
    <h1>This is Admin Panel</h1>
    <section class="newposts">
      <button type="button" @click="newpost">New Post</button>
      <button type="button" @click="logout">Log-Out</button>
    </section>
    <section class="existingposts">
      <h2>Existing Posts</h2>
      <postslink isAdmin :isArray="post" />
    </section>
  </div>
</template>

<script>
// import postslink from "@/components/posts/postslink.vue";
export default {
  head: {
    title: "Admin",
  },
  computed: {
    post() {
      return this.$store.getters.post;
    },
  },
  // asyncData(context) {
  //   return (
  //     new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve({
  //           post: [
  //             {
  //               userid: "1",
  //               userdescription: "This post is about history",
  //               favorite: true,
  //             },
  //             {
  //               userid: "2",
  //               userdescription: "This post is about zoology",
  //               favorite: false,
  //             },
  //             {
  //               userid: "3",
  //               favorite: false,
  //             },
  //           ],
  //         });
  //       }, 500);
  //       // reject(new Error());
  //     })
  //       // .then((data) => {
  //       //     context.store.commit("setPosts", data.post);
  //       // })
  //       .catch((e) => {
  //         context.error(e);
  //       })
  //   );
  // },
  layout: "admin",
  middleware: ["check-auth", "auth"],
  // components: { postslink },
  methods: {
    newpost() {
      this.$router.push("/admin/newpost");
    },
    logout() {
      console.log("logout method check");
      this.$store.dispatch("setLogoutTimer").then(() => {
        this.$router.go(0);
      });
    },
  },
};
</script>
<style scoped>
.admin {
  text-align: center;
  padding: 20px;
}
.newposts {
  text-align: center;
  border-bottom: solid 2px #ccc;
  padding-bottom: 10px;
}
.existingposts h2 {
  text-align: center;
}
</style>
