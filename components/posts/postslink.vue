<template>
  <div id="wrapper">
    <postspreview
      class="postlink"
      v-for="x in isArray"
      :key="x.userid"
      :postname="x.id"
      :id="x.userid"
      :is-admin="isAdmin"
      :postdesc="x.userdescription"
      :isFavorite="x.favorite"
      @toggleFavorite="receiveEmit"
      @toggleGoto="gotoEmit"
    />
  </div>
</template>

<script>
import postspreview from "~/components/posts/postspreview.vue";
export default {
  data() {
    return {};
  },
  layout: "postpages",
  components: {
    postspreview,
  },
  methods: {
    receiveEmit(id) {
      console.log("receiveEmit", id);
      console.log(this.isArray);
      const foundedid = this.isArray.find((post) => post.userid == id);
      foundedid.favorite = !foundedid.favorite;
      console.log(foundedid.favorite, "foundedid.favorite", this.isArray);
    },
    gotoEmit(postname) {
      // console.log(id);
      this.$router.push("/post/" + postname);
    },
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isArray: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
.postlink {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>
