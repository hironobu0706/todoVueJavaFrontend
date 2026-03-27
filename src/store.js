import { defineStore } from 'pinia';
import axios from 'axios'

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
        async customerRegistor() {
            //POSTリクエスト（通信）
            const url = axios.post("http://localhost:8080/api/createCustomer", this.customer)

              .then(() => {
                console.log(url)
              })

              .catch(err => {
                console.log("err:", err);
              });
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
});