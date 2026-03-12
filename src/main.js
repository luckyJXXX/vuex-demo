import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Vconsole from 'vconsole'

import App from './App.vue'
import './assets/style/common.less'
import './assets/style/reset.less'
import router from './router'
import store from './store'

const app = createApp(App)

app.config.productionTip = false

app.use(ElementPlus)
app.use(router)
app.use(store)

if (/sandbox.tiejin/.test(window.location.href) || /127.0.0.1/.test(window.location.href) || /10.3.0.333/.test(window.location.href)) {
  window.vconsole = new Vconsole()
}

app.mount('#app')
