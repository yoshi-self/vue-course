<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase</button>
        <p>{{ counter }}</p>
    </div>
</template>


<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
    activated() {
        console.log('activated');
    },
    deactivated() {
        console.log('deactivated');
    },
}
</script>

<style scoped>
div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}

h2 {
    color: blue;
}

.title {
    font-style: italic;
}
</style>
