<template>
    <div id="login-modal" v-if="isVisible === true">
        <div class="modal-header">
            <h6 class="modal-name">{{ modalName }}</h6>
            <button type="button" class="close" @click="$emit('closeModal')">
                <span>&times;</span>
            </button>
        </div>
        <div class="modal-body"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modalName: "Sign Up"
            }
        },

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
        border: 1px solid #555;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        background-color: #f8f9fa;
        padding: 20px 25px;
        align-items: center;
        border-bottom: 1px solid #e9ecef;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }

    .modal-name {
        font-weight: 600;
        font-size: 14px;
    }

    .close {
        background-color: transparent;
        border: 0;
        cursor: pointer;
        padding: 1rem;
        margin: -1rem -1rem -1rem auto;
    }

    .close span {
        font-size: 1.3125rem;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: .5;
    }
    .close span:hover { opacity: .8; }
</style>