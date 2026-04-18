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
            const url = axios.post(import.meta.env.VITE_API_URL + "/api/createCustomer", this.customer)

                .then(() => {
                    console.log(url)
                })

                .catch(err => {
                    console.log("err:", err);
                });
        },
        loginAuth(mailAddress, password) {
            let response;
            let message
            try {
                response = axios.post(import.meta.env.VITE_API_URL + "/api/loginAuth", {
                    mailAddress,
                    password,
                })
            } catch (error) {
                if (error instanceof Error) {
                    message = error.message
                } else {
                    message = String(error)
                }
                reportError({ message })
            }
            return message;
        },
        customerInput(inputCustomer) {
            this.customer = inputCustomer
        },
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
});