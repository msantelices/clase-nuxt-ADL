<template>
    <div>
        <header>
            <h1>Este es un layout</h1>
        </header>

        <main>
            <Nuxt />
        </main>
    </div>
</template>

<script>
export default {
    name: 'BlogLayout'
}
</script>

<style scoped>
header {
    width: 100%;
    background: #1c1c1c;
    color: #fff;
    padding: 1rem;
}
main {
    margin: 3rem auto;
    width: 80%;
}
</style>