<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement',
            ]),
            increment(by) {
                //this.$emit('updated', 1);
                //this.$store.state.counter += 1;
                //this.$store.commit('increment');
                this.$store.dispatch('increment', by);
            },
            decrement(by) {
                //this.$emit('updated', -1);
                //this.$store.state.counter -= 1;
                //this.$store.commit('decrement');
                this.$store.dispatch('decrement', by);
            },
        }
    }
</script>
