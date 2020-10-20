/**
 * 
 * 商城vuex
 */

export default {
    saveUserName(state, username) {
        state.username = username
    },
    saveCartCount(state, i) {
        state.cartCount = i
    }

}