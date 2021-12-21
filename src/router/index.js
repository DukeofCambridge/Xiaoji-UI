import Vue from 'vue'
import VueRouter from 'vue-router'
import Error from '@/components/Error'
import Cinema from "@/components/Cinema/Cinema";
import Finance from "@/components/Echarts/Finance"
import Screen from "@/components/Cinema/Screen"
import Home from "@/components/Home";
import Strawberry from "@/components/Strawberry";
import Weather from "@/components/Weather";
import Control from "@/components/Control";
import Setting from "@/components/Setting";
import News from "@/components/News";

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name:'Home',
    component: Home
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },
  {
    path: '/screen',
    name: 'Screen',
    component: Screen
  },
  {
    path:'/finance',
    name:'Finance',
    component: Finance
  },
  {
    path:'/monitor',
    name:'Monitor',
    component: Strawberry
  },
  {
    path:'/weather',
    name:'Weather',
    component: Weather
  },
  {
    path:'/control',
    name:'Control',
    component: Control
  },
  {
    path: '/setting',
    name:'Setting',
    component: Setting
  },
  {
    path:'/news',
    name: 'News',
    component: News
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
