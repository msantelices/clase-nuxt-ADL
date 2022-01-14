export const state = () => ({
    msg: 'Hola desde Vuex'
})

export const mutations = {
    modificarMsg(state, text) {
        state.msg = text
    }
}