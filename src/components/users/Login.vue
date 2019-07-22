<template>
    <div id="login-modal" v-if="isVisible === true">
        <div class="modal-header">
            <h6 class="modal-name">{{ modalName }}</h6>
            <button type="button" class="close" @click="$emit('closeModal')">
                <span>&times;</span>
            </button>
        </div>

        <div class="choose-modal-type">
            <div class="sign-up" :class="{ active: activeSignUp }" @click="signUpIsActive">
                <span>Sign Up</span>
            </div>
            <div class="sign-in" :class="{ active: activeSignIn }" @click="signInIsActive">
                <span>Sign In</span>
            </div>
        </div>

        <div class="modal-body">
            <form v-if="activeSignUp" id="sign-up-form" class="user-form">
                <h3>Sign Up</h3>
                <h6>Please fill in this form to create an account!</h6>
                <div class="field">
                    <div>
                        <label for="name">Your Name</label>
                    </div>
                    <input type="text" id="name">
                </div>
                <div class="field">
                    <div>
                        <label for="sign-up-email">Your Email</label>
                    </div>
                    <input type="text" id="sign-up-email">
                </div>
                <div class="field">
                    <div>
                        <label for="sign-up-password">Your Password</label>
                    </div>
                    <input type="text" id="sign-up-password">
                </div>
                <div class="field">
                    <div>
                        <label for="confirm-password">Confirm Password</label>
                    </div>
                    <input type="text" id="confirm-password">
                </div>
                <button type="button" class="btn submit-btn">Sign In!</button>
            </form>

            <form v-if="activeSignIn" id="sign-in-form" class="user-form">
                <h3>Please Sign In</h3>
                <div class="field">
                    <div><label for="email">Your Email</label></div>
                    <input type="text" id="email">
                </div>
                <div class="field">
                    <div>
                        <label for="password">Your Password</label>
                    </div>
                    <input type="text" id="password">
                </div>
                <button type="button" class="btn submit-btn">Sign In!</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modalName: "Sign Up",
                activeSignUp: true,
                activeSignIn: false
            }
        },

        props: {
            isVisible: Boolean
        },

        methods: {
            signUpIsActive() {
                this.activeSignUp = true;
                this.activeSignIn = false;
            },

            signInIsActive() {
                this.activeSignUp = false;
                this.activeSignIn = true;
            }
        }
    }
</script>

<style scoped>
    #login-modal {
        position: absolute;
        top: 25%;
        left: calc(50% - 200px);
        width: 400px;
        min-height: 400px;
        border: 1px solid #555;
        z-index: 1;
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

    .choose-modal-type {
        display: flex;
        justify-content: flex-start;
    }

    .sign-up,
    .sign-in {
        border: 1px solid #555;
        border-radius: 100px;
        cursor: pointer;
        width: 100px;
        padding: 5px 10px;
        margin: 10px;
        text-align: center;
    }
    .sign-up { margin-right: 0; }

    .sign-up.active,
    .sign-in.active {
        background-color: #27ae60;
        color: #fff;
        font-weight: 400;
    }

    .user-form {
        margin-top: 15px;
        width: 80%;
        margin-left: 10%;
    }
    .user-form h3,
    .user-form h6 { margin-bottom: 15px; }

    .user-form h3,
    .user-form h6,
    .user-form .btn { text-align: center; }

    .field {
        width: 80%;
        margin-bottom: 10px;
        margin-left: 10%;
    }
    .field input { width: 100%; }

    .submit-btn {
        width: 40%;
        margin: 0 0 15px 30%;
    }
    .submit-btn:hover { background-color: #27ae60; }
</style>