<template>
  <div class="link">
    <nuxt-link :to="postlink">post {{ id }}</nuxt-link>
    <img v-show="isFavorite" src="~/assets/images/favorite.png" />
    <p>{{ postdesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
    <button v-on:click="toggleGoto">Goto</button>
  </div>
</template>
<style scoped>
.link a {
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  color: black;
}
.link a:hover,
.link a:active {
  color: burlywood;
}
img {
  height: 1.5em;
  float: right;
}
</style>
<script>
export default {
  name: "postpreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
    postdesc: {
      type: String,
      required: false,
      default: "This post is about general ",
    },
    postname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleFavorite() {
      //   this.postisFavorite = !this.postisFavorite;
      this.$emit("toggleFavorite", this.id);

      //   console.log(this.id);
    },
    toggleGoto() {
      console.log(this.postname);
      this.$emit("toggleGoto", this.postname);
      //   console.log(typeof this.id, id);
    },
  },
  computed: {
    postlink() {
      return this.isAdmin
        ? "/admin/" + this.postname
        : "/post/" + this.postname;
    },
  },
};
</script>
