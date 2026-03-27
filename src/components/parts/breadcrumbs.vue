<script>
export default {
  name: 'breadcrumbs'
}
</script>

<template>
    <ol class="breadcrumb">
        <li><a href="#">ホーム</a></li>
        <li><a href="#">入力</a></li>
        <li><a href="#">確認</a></li>
        <li><a href="#">完了</a></li>
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
    background-color: #258ed0;
    font-size: .9em;
}

.breadcrumb li {
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 20px;
}

.breadcrumb li:first-child a::before {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 4px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z' fill='%23fff'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    vertical-align: text-bottom;
    content: '';
}

.breadcrumb li:not(:last-child)::before,
.breadcrumb li:not(:last-child)::after{
    position: absolute;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    content:'';
}

.breadcrumb li:not(:last-child)::before{
    right: 0;
    border-left: 10px solid #fff;
}

.breadcrumb li:not(:last-child)::after{
    right: 2px;
    border-left: 10px solid #258ed0;
}

.breadcrumb a {
    color: #fff;
    text-decoration: none;
}
</style>