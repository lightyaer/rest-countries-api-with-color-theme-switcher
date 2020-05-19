import Vue from 'vue';
import VueRouter from 'vue-router';
import CountryView from '../country/CountryView';
import CountryListView from '../country/list/CountryListView';
import CountryDetailView from '../country/detail/CountryDetailView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'country' }
  },
  {
    path: '/country',
    component: CountryView,
    children: [
      { path: '', name: 'country', component: CountryListView },
      {
        path: ':countryId',
        name: 'countryDetail',
        component: CountryDetailView
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
