<template>
    <div>
        <h1>The User Page</h1>
        <p>Loaded ID: {{ id }}</p>
        <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'home' });
        },
    },
}
</script>
