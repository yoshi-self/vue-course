<template>
    <div>
        <p>Status: {{ status }}</p>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            status: 'Critical',
        };
    },
    methods: {
        changeStatus() {
            this.status = 'Normal';
        }
    }
}
</script>
<style>
</style>
