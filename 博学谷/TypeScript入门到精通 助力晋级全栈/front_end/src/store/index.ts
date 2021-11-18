import Vue from 'vue'
import Vuex from 'vuex'
import VuePersistence from 'vuex-persist'

const vuexLocal = new VuePersistence({
    // storage: window.localStorage
    saveState: ((key, state, storage) => {
        const all = {
            user: (<any>state).user,
            cart: Array.from((<any>state).cart || [])
        };
        window.localStorage.setItem(key, JSON.stringify(all));
    }),
    restoreState: ((key, storage) => {
        const all = JSON.parse(<string>window.localStorage.getItem(key || "{}")) || {};
        return {
            user: all.user || null,
            cart: new Map(all.cart)
        };
    })
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
                (<any>state.cart.get(item._id)).quantity += 1;
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