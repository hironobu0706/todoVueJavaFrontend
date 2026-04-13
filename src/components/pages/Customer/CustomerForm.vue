<template>
  <form>
    <!-- メール -->
    <div class="mb-3">
      <label class="form-label">メールアドレス</label>
      <input
        type="email"
        class="form-control"
        v-model="customer.mailAddress"
      />
    </div>

    <!-- パスワード -->
    <div class="mb-3">
      <label class="form-label">パスワード</label>
      <input
        type="password"
        class="form-control"
        v-model="customer.password"
      />
    </div>

    <!-- 氏名 -->
    <div class="mb-3">
      <label class="form-label">氏名</label>
      <input
        type="text"
        class="form-control"
        v-model="customer.name"
      />
    </div>

    <!-- カナ -->
    <div class="mb-3">
      <label class="form-label">カナ</label>
      <input
        type="text"
        class="form-control"
        v-model="customer.nameKana"
      />
    </div>

    <!-- 性別 -->
    <div class="mb-3">
      <label class="form-label d-block">性別</label>
      <div
        v-for="option in genderOptions"
        :key="option.value"
        class="form-check form-check-inline"
      >
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="radio"
            :value="option.value"
            v-model="customer.gender"
          />
          {{ option.label }}
        </label>
      </div>
    </div>

    <!-- 都道府県 -->
    <div class="mb-3">
      <label class="form-label">都道府県</label>
      <select class="form-select" v-model="customer.jushoPref">
        <option
          v-for="pref in prefOptions"
          :key="pref.value"
          :value="pref.value"
        >
          {{ pref.label }}
        </option>
      </select>
    </div>

    <!-- 住所1 -->
    <div class="mb-3">
      <label class="form-label">住所1</label>
      <input
        type="text"
        class="form-control"
        v-model="customer.jusho1"
      />
    </div>
    
    <!-- 住所2 -->
    <div class="mb-3">
      <label class="form-label">住所2</label>
      <input
        type="text"
        class="form-control"
        v-model="customer.jusho2"
      />
    </div>

  </form>
</template>

<script setup>
const customer = defineModel()
// import { reactive, watch } from 'vue'

// // v-model受け取り
// const props = defineProps({
//   modelValue: Object
// })

// // 親へ更新通知
// const emit = defineEmits(['update:modelValue'])

// // ローカルコピー（ここ重要）
// const customer = reactive({ ...props.modelValue })

// // 親 → 子 反映
// watch(
//   () => props.modelValue,
//   (newVal) => {
//     Object.assign(customer, newVal)
//   }
// )

// // 子 → 親 反映
// watch(
//   customer,
//   (newVal) => {
//     emit('update:modelValue', newVal)
//   },
//   { deep: true }
// )

const genderOptions = [
  { value: 1, label: '男性' },
  { value: 2, label: '女性' },
  { value: 3, label: '回答なし' }
]

const prefOptions = [
  { value: 1, label: '東京' },
  { value: 2, label: '埼玉' },
  { value: 3, label: '千葉' },
  { value: 4, label: '神奈川' }
]
</script>