import Vuex from "vuex";
import Cookie from "js-cookie";
//import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      post: [],
      token: null,
    },
    mutations: {
      setPosts(state, posts) {
        state.post = posts;
      },
      addPost(state, newpost) {
        state.post.push(newpost);
      },
      editPost(state, editedPost) {
        const postIndex = state.post.findIndex(
          (post) => post.id === editedPost.id
        );
        state.post[postIndex] = editedPost;
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return this.$axios
          .get("https://nuxtbasics-default-rtdb.firebaseio.com/posts.json")
          .then((res) => {
            const postArray = [];
            for (const key in res.data) {
              postArray.push({ ...res.data[key], id: key });
            }
            //console.log(postArray);
            vuexContext.commit("setPosts", postArray);
          })
          .catch((e) => context.error(e));
      },
      addPost(vuexContext, newpost) {
        const createdPost = {
          ...newpost,
          updateddate: new Date(),
        };
        return this.$axios
          .post(
            "https://nuxtbasics-default-rtdb.firebaseio.com/posts.json?auth=" +
              vuexContext.state.token,
            createdPost
          )
          .then((result) => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: result.data.name,
            });
          })
          .catch((e) => console.log(e));
      },
      async editPost(vuexContext, editedPost) {
        await this.$axios
          .put(
            "https://nuxtbasics-default-rtdb.firebaseio.com/posts/" +
              editedPost.id +
              ".json?auth=" +
              vuexContext.state.token,
            editedPost
          )
          .then((res) => {
            vuexContext.commit("editPost", editedPost);
          })
          .catch((e) => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.fbAPIKey;
        if (!authData.isLogin) {
          authUrl =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            process.env.fbAPIKey;
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((result) => {
            vuexContext.commit("setToken", result.idToken);
            localStorage.setItem("token", result.idToken);
            // localStorage.setItem('tokenExpiration',new Date().getTime() +result.expiresIn*1000);
            Cookie.set("jwt", result.idToken);
            // Cookie.set("expirationDate",new Date().getTime() +result.expiresIn*1000);
            // vuexContext.dispatch('setLogoutTimer',result.expiresIn * 1000)
          })
          .catch((e) => console.log(e.message));
      },
      setLogoutTimer(vuexContext, duration) {
        // setTimeout(()=>{

        //   vuexContext.commit('clearToken')
        // },duration)
        //console.log("storeinside checking");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
        vuexContext.commit("clearToken");
      },
      initAuth(vuexContext, req) {
        let token;
        //let expirationDate;
        // console.log(req, "REQ");
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie.split(";").find((c) => {
            //console.log("trim find", c);
            //console.log("trim find ", c.trim().startsWith("jwt="));
            return c.trim().startsWith("jwt=");
          });
          if (!jwtCookie) {
            console.log(jwtCookie, "jwtCookie");
            return;
          }
          token = jwtCookie.split("=")[1];
          console.log(token, "cookie token");
          // expirationDate=req.headers.cookie.split(';').find(c=>c.trim().startswith('expirationDate=')).split('=')[1];
        } else {
          token = localStorage.getItem("token");
          // expirationDate=localStorage.getItem('tokenExpiration');
          // if (new Date() > +expirationDate || !token) {
          //   return;
          // }
        }
        // vuexContext.dispatch('setLogoutTimer',+expirationDate-new Date().getTime());
        vuexContext.commit("setToken", token);
      },
    },
    getters: {
      post(state) {
        return state.post;
      },
      isAuthenticated(state) {
        console.log("isAuthenticated token", state.token);
        return state.token ? true : false;
      },
    },
  });
};

export default createStore;
