import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'

// import modules
import output from './modules/output'

Vue.use(Vuex)

export default new Vuex.Store({
    //use actions as short version
    actions: actions,
    modules: {  // add the modules from store
        output
    }
})