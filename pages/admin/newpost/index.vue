<template>
  <div class="adminnewpost">
    <section class="newpostform">
      <h1>Add the new post details in below form</h1>
      <adminpostform @submit="onsubmitted" />
    </section>
  </div>
</template>

<script>
import adminpostform from "@/components/Admin/adminpostform.vue";
//import axios from "axios";
export default {
  components: {
    adminpostform,
  },
  head: {
    title: "New-Post",
  },
  layout: "admin",
  middleware: ["check-auth", "auth"],
  methods: {
    onsubmitted(formData) {
      this.$store.dispatch("addPost", formData).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
<style scoped>
.newpostform {
  text-align: center;
}
</style>
