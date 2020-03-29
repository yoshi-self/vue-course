<template>
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue';

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
    },
    components: {
        'app-server-status': ServerStatus,
    },
}
</script>
