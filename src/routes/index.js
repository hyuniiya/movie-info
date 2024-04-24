import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default newVueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Main,
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: MovieDetail,
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
    },
  ],
});
