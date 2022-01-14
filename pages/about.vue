<template>
    <div>
        <h1>About</h1>
        <br>
        <h3>{{ msg }}</h3>

        <div>
            <input type="text" v-model="text">
            <button @click="changeMsg">Cambiar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
    layout: 'blog',
    middleware: 'auth',

    data() {
        return {
            text: ''
        }
    },

    computed: {
        msg() {
            return this.$store.state.info.msg
        }
    },

    methods: {
        changeMsg() {
            this.$store.commit('info/modificarMsg', this.text)
        }
    }
}
</script>

<style scoped>
input {
    border: 1px solid #ccc;
}
</style>