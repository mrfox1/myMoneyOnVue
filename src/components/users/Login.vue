<template>
    <div id="login-modal" v-if="visible === true">

    </div>
</template>

<script>
    export default {
        props: ['visible']
    }
</script>

<style scoped>
    #login-modal {
        position: absolute;
        top: 30%;
        left: 30%;
        width: 400px;
        height: 400px;
        background-color: #cccccc;
    }
</style>