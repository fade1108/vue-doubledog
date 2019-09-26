<template>

    <div class="container-fulid">
    <my-header>

    </my-header>
    <div class="container">
        <button class="btn btn-success m-5"><router-link :to="`indexdg`">返回首页</router-link></button>
        <img class="w-100 m-5" src="../../public/images/fadeweiixn.png">
    </div>
        <foot>

        </foot>
    </div>

</template>
<script>
    import FooTer from "./footer.vue";
    export default {
        components: {

            foot: FooTer

        }

    }
</script>
<style>

</style>