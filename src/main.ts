import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import testleem from '../lib/main'
import {register} from 'swiper/element/bundle' //swiper

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

register() //swiper

createApp(App)
  .use(testleem, {
    customStyle: {
      background: 'defaultBackground'
    }
  })
  .use(router)
  .mount('#app')
