<template>
  <form @submit.prevent="onsave" class="newform">
    Id : <input type="text" v-model="editedpost.userid" />
    <br />
    <br />
    Description :
    <input type="textarea" v-model="editedpost.userdescription" />
    <br />
    <br />
    Author : <input type="text" v-model="editedpost.userauthor" />
    <br />
    <br />
    Content :
    <textarea cols="30" rows="5" v-model="editedpost.usercontent"></textarea>
    <br />
    <br />
    <input type="submit" value="Save" />
    <button @click="oncancel">Cancel</button>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      editedpost: this.post
        ? { ...this.post }
        : {
            userid: "",
            userdescription: "",
            userauthor: "",
            usercontent: "",
            favorite: false,
          },
    };
  },
  methods: {
    onsave() {
      //save the post
      this.$emit("submit", this.editedpost);
    },
    oncancel() {
      //going back
      this.$router.push("/admin");
    },
  },
};
</script>

<style scoped>
.newform {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 20px;
}
</style>
