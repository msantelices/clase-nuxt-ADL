<template>
    <h1>Este es el usuario ID: {{ id }}, {{ saludo }}</h1>
</template>

<script>
export default {
    name: 'UserId',

    async asyncData({ params }) {
        const id = params.id

        return { id }
        // El objeto retornado se puede usar como variable en el template
    },

    data() {
        return {
            saludo: 'Hola Usuario!'
        }
    }
}
</script>