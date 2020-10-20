export default {
    saveUserName(context, username) {
        context.commit('saveUserName', username);
    },
    saveCartCount(context, i) {
        context.commit('saveCartCount', i);
    }
}