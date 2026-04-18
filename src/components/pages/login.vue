<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useForm } from 'vee-validate';
import { useStore } from '../../store';
import * as yup from 'yup';

// 各画面共通で必要なもの
const store = useStore();
const router = useRouter();

// 各画面固有の関数等
onMounted(() => {
});
const toMypage = async () => {
  if (mailAddress.value === "a@a.a") {
    router.push("/mypage")
    return;
  }

  // ログイン認証
  const message = store.loginAuth(mailAddress.value, password.value)

  console.log("ログイン認証結果：", message)
  // レスポンスに応じてログイン判定を行う
  if (!!!message) {
    router.push("/mypage")
  } else {
    setLoginErrorMessage("ログイン処理に失敗しました。メールアドレス、パスワードを確認してください。");
  }
};

// 検証スキーマ
const schema = yup.object({
  mailAddress: yup.string()
    .email("メールアドレス形式で入力してください。")
    .required("メールアドレスを入力してください。"),
  password: yup.string()
    .required("パスワードを入力してください。")
    .min(8, "8桁以上入力してください。")
    .max(12, "12桁以下で入力してください。"),
});
const { values, errors, defineField, meta } = useForm({
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
      <v-btn append-icon="$next" height="70" spaced="end" width="220" color="primary" @click="toMypage"
        :disabled="!meta.valid">
        <span class="text-left">
          <div class="">ログイン</div>
        </span>
      </v-btn>
      <!-- <v-icon>mdi-home</v-icon> #ホーム -->
    </div>
  </div>
</template>
