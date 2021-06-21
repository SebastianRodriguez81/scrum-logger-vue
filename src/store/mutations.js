const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
    setRoutes(state, newRoutes) {
        state.Routes = [];
        state.Routes = newRoutes;
    }
}

export default mutations;