<script setup>
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useForm } from 'vee-validate';
import * as yup from 'yup';

// 各画面共通で必要なもの
const router = useRouter();

// 各画面固有の関数等
onMounted(() => {
});
const toCustomerInput = () => {
  router.push("/customerInput")
};
const toLogin = () => {
  router.push("/login")
};
function onSubmit() {
  console.log("submit")
}

// 検証スキーマ
const schema = yup.object({
  mailAddress: yup.string().email().required(),
});
const { values, errors, defineField } = useForm({
  validationSchema: schema,
});

const [mailAddress, mailAddressAttrs] = defineField('mailAddress',{
  validateOnModelUpdate: false,
})

</script>

<template>
  <div class="content-area">
    <h1>ログイン画面</h1>
    <div>ここに説明等を記載</div>
    <div class="button-container">
      <br />

      <input v-model="mailAddress" v-bind="mailAddressAttrs" />

      <pre>values:{{ values.mailAddress }}</pre>
      <pre>errors: {{ errors.mailAddress }}</pre>
    </div>
  </div>
</template>
