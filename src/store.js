import { defineStore } from 'pinia';
import axios from 'axios'

export const useStore = defineStore('main', {
    state: () => ({
        count: 13,
        customer: {
            mailAddress: "",
            password: "",
            name: "",
            nameKana: "",
            jushoPref: "",
            jusho1: "",
            jusho2: "",
            gender: "",
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
        },
        customerInput(inputCustomer) {
            this.customer = inputCustomer
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
});