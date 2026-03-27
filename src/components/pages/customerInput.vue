<script>
// import { ref } from 'vue'
// import viteLogo from '../assets/vite.svg'
// import heroImg from '../assets/hero.png'
// import vueLogo from '../assets/vue.svg'
// import axios from 'axios'
import { useStore } from '../../store';
import { useRouter } from "vue-router";
import { ref, reactive, onMounted } from 'vue'
import breadcrumbs from '../parts/breadcrumbs.vue'


export default {
  name: 'customerInput',
  setup() {
    const sample = ref(1);
    let customer = reactive({
      name: "",
      nameKana: "",
      // mailAddress: "",
      jushoPref: "",
      jusho1: "",
      jusho2: "",
      gender: "",
    });
    const store = useStore();
    const router = useRouter();
    const toCustomerConfirm = () => {
      router.push("/customerConfirm")
    };
    const toInit = () => {
      // sample.value = 39;
      router.push("/init")
    };
    onMounted(() => {
      console.log('-- App Mounted!! --') // mountedの確認用
      Object.assign(customer, store.customer) // reactiveはこうやって入れるらしい
    });
    return {
      sample,
      customer,
      store,
      toCustomerConfirm,
      toInit
    };
  },
  components: {
    breadcrumbs
  }
}
</script>

<template>
  <h1>顧客情報入力画面</h1>
  <div>store:{{ store.count }}</div>
  <div>data: {{ customer.name }}</div>
  <div>data2: {{ sample }}</div>
  <div>変更完了</div>
  <div class="breadcrumbsWrapper">
    <breadcrumbs />
  </div>
  <div>
    <table class="table table-bordered border custommer-table">
      <tbody>
        <tr>
          <td>氏名</td>
          <td><input class="form-control" type="text" placeholder="しめい" v-model="customer.name"></td>
        </tr>
        <tr>
          <td>カナ</td>
          <td><input class="form-control" type="text" placeholder="シメイ" v-model="customer.nameKana"></td>
        </tr>
        <tr>
          <td>性別</td>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" value="1"
                v-model="customer.gender">
              <label class="form-check-label" for="radioDefault1">
                男性
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" value="2"
                v-model="customer.gender">
              <label class="form-check-label" for="radioDefault2">
                女性
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault3" value="3"
                v-model="customer.gender">
              <label class="form-check-label" for="radioDefault3">
                回答なし
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <td>住所(都道府県)</td>
          <td>
            <select class="form-select" v-model="customer.jushoPref">
              <option selected value="1">東京</option>
              <option value="2">埼玉</option>
              <option value="3">千葉</option>
              <option value="4">神奈川</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>住所1</td>
          <td><input class="form-control" type="text" placeholder="練馬区北町９９ー１－１" v-model="customer.jusho1"></input></td>
        </tr>
        <tr>
          <td>住所2</td>
          <td><input class="form-control" type="text" placeholder="メゾンキタマチ　１０１" v-model="customer.jusho2"></input></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="button-container">
    <button type="button" class="btn back-button" @click="toInit">
      戻る
    </button>
    <button type="button" class="btn btn-primary next-button" @click="toCustomerConfirm">
      確認ページへ
    </button>
  </div>
</template>
<style>
.custommer-table {
  width: 60%;
  margin: auto;
}
</style>