<template>
  <div class="admin-post-page">
    <section class="update-form">
      <adminpostform :post="loadedpost" @submit="onsubmitted" />
    </section>
  </div>
</template>
<script>
import adminpostform from "@/components/Admin/adminpostform.vue";
export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  async asyncData(context) {
    let loadedpost;
    console.log("post reference id-", context.params.postId);
    await context.$axios
      .get(
        "https://nuxtbasics-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        console.log("checking on client", res.data);
        loadedpost = res.data ? { ...res.data, id: context.params.postId } : [];
        console.log(loadedpost);
      })
      .catch((e) => context.error(e));
    return {
      loadedpost,
    };
  },
  head() {
    return {
      title: "Edit-PostNo " + this.loadedpost.userid,
    };
  },

  components: {
    adminpostform,
  },

  methods: {
    async onsubmitted(editedpost) {
      await this.$store.dispatch("editPost", editedpost).then(() => {
        window.alert("Post is Updated");
        this.$router.push("/admin");
      });
    },
  },
};
</script>
