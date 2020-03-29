<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    data() {
        return {
        };
    },
    components: {
        appHeader: Header,
    },
}
</script>

<style>
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}
.slide-leave {
    opacity: 1;
}
.slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
}
.slide-move {
    transition: transform 1s;
}
@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-30px);
    }
}
@keyframes slide-in {
    from {
        transform: translateY(-30px);
    }
    to {
        transform: translateY(0px);
    }
}
/*
.slide-leave-active {
    transform: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
}
.slide-leave {
    opacity: 1;
    transform: translateX();
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}
.slide-move {
    transition: transform 1s;
}
@keyframes slide-out {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-30px);
    }
}
@keyframes slide-in {
    0% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0);
    }
}
*/

hr {
    border: 1px solid black;
}
</style>
