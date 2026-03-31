<script>
export default {
    name: 'breadcrumbs',
    props: ['nowPage'],
    setup() {
    }
}
</script>

<template>
    {{ sample }}
    <ol class="breadcrumb">
        <li>トップページ<span class="color-red" v-if="nowPage === '1'">(現在のページ)</span></li>
        <li>顧客情報入力<span class="color-red" v-if="nowPage === '2'">(現在のページ)</span></li>
        <li>顧客情報確認<span class="color-red" v-if="nowPage === '3'">(現在のページ)</span></li>
        <li>完了<span class="color-red" v-if="nowPage === '4'">(現在のページ)</span></li>
    </ol>
</template>

<style>
.breadcrumb {
    height: 50px;
    display: flex;
    gap: 0 20px;
    list-style: none;
    padding: 6px 0 6px 18px;
    border-radius: 3px;
    overflow: hidden;
    background-color: #0d6efd;
    font-size: .9em;
}

.breadcrumb li {
    flex: auto;
    align-items: center;
    position: relative;
    padding-right: 20px;
    color: #fff;
    text-decoration: none;
}

.breadcrumb li:not(:last-child)::before,
.breadcrumb li:not(:last-child)::after {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    content: '';
}

.breadcrumb li:not(:last-child)::before {
    right: 0;
    border-left: 10px solid #fff;
}

.breadcrumb li:not(:last-child)::after {
    right: 2px;
    border-left: 10px solid #0d6efd;
}

.color-red{
    color: red;
}

</style>