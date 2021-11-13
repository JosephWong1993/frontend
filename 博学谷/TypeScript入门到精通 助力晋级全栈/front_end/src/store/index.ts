import Vue from 'vue'
import Vuex from 'vuex'
import VuePersistence from 'vuex-persist'

const vuexLocal = new VuePersistence({
    storage: window.localStorage
});
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: new Map<string, any>([]),
        user: null
    },
    mutations: {
        saveUser(state: any, user) {
            state.user = user;
        },
        clearUser(state) {
            state.user = null;
        },
        addToCart(state, item) {
            if (!state.cart.has(item._id)) {
                item.quantity = 1;
                state.cart.set(item._id, item);
            } else {
                state.cart.get(item._id).quantity += 1;
            }
        },
        removeFormCart(state, id) {
            state.cart.delete(id);
        },
        clearCart(state) {
            state.cart.clear();
        }
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})