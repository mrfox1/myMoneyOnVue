<template>
    <div id="login-modal" v-if="isVisible === true">
        <div class="modal-header">

        </div>
        <div class="modal-body"></div>
    </div>
</template>

<script>
    export default {
        props: {
            isVisible: Boolean
        }
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