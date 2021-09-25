import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Career from "../views/Career.vue"
import Partnership from "../views/Partnership.vue"
import Blog from "../views/Blog.vue"
import Market from "../views/Market.vue"
import Tips from "../views/Tips.vue"
import Post from "../views/PostDetails.vue"
import Contact from "../views/Contact.vue"
import Signin from "../views/Signin.vue"
import Register from "../views/Register.vue"
import Dashboard from "../views/Dashboard.vue"
import DashboardMain from "../components/DashboardMain.vue"
import Transaction from "../components/Transactions.vue"
import Wallet from "../components/Wallet.vue"
import History from "../components/History.vue"
import Settings from "../components/Settings.vue"
import Profile from '../components/Profile'
import Addres from "../components/Addres"
import  Security from "../components/Security"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    
  },
  {
    path: "/career",
    name: "Career",
    component: Career
  },
  {
    path: "/partnership",
    name: "Partnership",
    component:Partnership
  },
  {
    path: "/blog",
    name: "Blog",
    component:Blog
  },
  {
    path: "/market",
    name: "Market",
    component:Market
  },
  {
    path: "/tips",
    name: "Tips",
    component: Tips
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/signin",
    name: Signin,
    component:Signin
  },
  {
    path: "/register",
    name: Register,
    component:Register
  },
  {
    path: "/dashboard/main",
    name: Dashboard,
    component: Dashboard,

    children: [
      {
        path: "/dashboard/main",
        name: DashboardMain,
        component: DashboardMain
      },
      {
        path: "/dashboard/transaction",
        name: Transaction,
        component: Transaction
      },
      {
        path: "/dashboard/wallet",
        name: Wallet,
        component: Wallet
      },
      {
        path: "/dashboard/history",
        name: History,
        component: History
      },
      {
        path: "/dashboard/settings",
        name: Settings,
        component: Settings,

        children: [{
          path: "/dashboard/settings",
          name: Profile,
          component: Profile
        },
           {
             path: "/dashboard/settings/wallet_addresses",
             name: Addres,
             component: Addres
           },
           {
             path: "/dashboard/settings/security",
             name: Security,
             component: Security
           }
        ]
      },
     
    ]
  }

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
