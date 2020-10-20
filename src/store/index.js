import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

const state = {
    username: '',
    cartCount: -1
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})


function deepClone(obj) {
    let objclone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if ()
            }
        }
    }
}