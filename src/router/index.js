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
import WeatherToday from "@/components/Weather/WeatherToday";
import WeatherFuture from "@/components/Weather/WeatherFuture";
import Login from "@/components/Login";
import FaceLogin from "@/components/FaceLogin";
import Tiyu from "@/components/AllNews/Tiyu";
import Yule from "@/components/AllNews/Yule";
import Keji from "@/components/AllNews/Keji";
import Youxi from "@/components/AllNews/Youxi";

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Login' },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/face',
    name:'Face',
    component: FaceLogin
  },
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
    redirect:'/weather/today',
    component: Weather,
    children: [
      {
        path: 'today',
        name: 'WeatherToday',
        component: WeatherToday
      },
      {
        path: 'future',
        name: 'WeatherFuture',
        component: WeatherFuture
      }
    ]
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
    path:'/tiyu',
    name:'Tiyu',
    component:Tiyu
  },
  {
    path:'/yule',
    name:'Yule',
    component:Yule
  },
  {
    path:'/keji',
    name:'Keji',
    component:Keji
  },
  {
    path:'/youxi',
    name:'Youxi',
    component:Youxi
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
