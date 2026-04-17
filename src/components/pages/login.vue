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
  password: yup.string().required().min(8).max(12),
});
const { values, errors, defineField } = useForm({
  validationSchema: schema,
});
const [mailAddress, mailAddressAttrs] = defineField('mailAddress', {
  validateOnModelUpdate: false,
})
const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: false,
})

</script>

<template>
  <div class="content-area">
    <h1>ログイン画面</h1>
    <div>ここに説明等を記載</div>

    <v-row justify="center" align="center" class="mt-5">
      <v-col cols="3" align="right">
        <label>メールアドレス</label>
      </v-col>
      <v-col cols="9">
        <input type="email" class="form-control" v-model="mailAddress" v-bind="mailAddressAttrs" />
        <!-- <input v-model="mailAddress" v-bind="mailAddressAttrs" />
      <pre>values:{{ values.mailAddress }}</pre> -->
      </v-col>
    </v-row>
    <v-row gap="0">
      <v-col cols="3">
      </v-col>
      <v-col cols="9">
        <p>{{ errors.mailAddress }}</p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="3" align="right">
        <label>パスワード</label>
      </v-col>
      <v-col cols="9">
        <input type="password" class="form-control" v-model="password" v-bind="passwordAttrs" />
        <!-- <input v-model="password" v-bind="passwordAttrs" />
      <pre>values:{{ values.password }}</pre>-->
        <!-- <div>{{ errors.password }}</div> -->
      </v-col>
    </v-row>
    <v-row gap="0">
      <v-col cols="3">
      </v-col>
      <v-col cols="9">
        <p>{{ errors.password }}</p>
      </v-col>
    </v-row>
    <div class="button-container">
      <v-btn append-icon="$next" height="70" spaced="end" width="220" color="primary">
        <span class="text-left">
          <div class="">Next</div>
        </span>
      </v-btn>
      <v-icon>mdi-home</v-icon> #ホーム
    </div>
  </div>
</template>
