import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'md'
    }
}

export default new Vuetify(opts)