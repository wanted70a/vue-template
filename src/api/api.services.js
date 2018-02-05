import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {API_URL, POSTS } from './endpoints'

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = API_URL

export default {

  get (resource) {
    return Vue.axios
      .get(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }

}


// ApiService.query('link').then(resource => {
//     console.log(resource)
// })
