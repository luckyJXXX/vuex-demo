import Vue from 'vue'
import Vuex from 'vuex'

import index from './pages/youliao/index/module'
import channel from './pages/youliao/channel/module'
import feed from './pages/youliao/feed/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index,
    channel,
    feed
  }
})