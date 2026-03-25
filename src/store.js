import { defineStore } from 'pinia';
export const useStore = defineStore('main', {
    state: () => ({
        count: 13,
        customer: {
            name: "指名",
            nameKana: "サトウタロウ",
            jushoPref: "3",
            jusho1: "さいたまし",
            jusho2: "みなみくりはし",
            gender: "2",
        }
    }),
    actions: {
        increment() {
            this.count++;
        },
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
});