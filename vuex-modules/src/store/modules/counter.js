import * as types from '../types';

const state = {
    counter: 0,
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    },
};

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: (context, {by, duration}) => {
        setTimeout(() => {
            context.commit('increment', by);
        }, duration);
    },
    asyncDecrement: (context, {by, duration}) => {
        setTimeout(() => {
            context.commit('decrement', by);
        }, duration);
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
}
