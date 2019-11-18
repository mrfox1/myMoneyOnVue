<template>
    <div class="row" v-if="getUserName !== ''">
        <div class="items-container">
            <app-profit v-for="(profit, index) in profits" :key="profit.id" :profit="profit" :index="index"></app-profit>
        </div>
        <form v-if="formVisible" id="new-record-form">
            <h3>Add new Profit</h3>
            <h4 @click="editDateVisible = !editDateVisible">
                Today: {{ date }}
                <br>
                <small>Click for edit</small>
            </h4>
            <input type="date" class="form-control" placeholder="Edit date" v-if="editDateVisible" v-model="date">
            <div class="form-group">
                <input type="number" class="form-control" placeholder="Enter sum of profit" v-model="sum">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter category of profit" v-model="category">
            </div>
            <button type="button" class="btn" @click="sendData">Submit</button>
        </form>
        <button class="btn" @click="formVisible = !formVisible">
            Add Profit
        </button>
    </div>
</template>

<script>
    import Profit from './Profit.vue'

    export default {
        data() {
            const d = new Date();
            const date = d.getFullYear()+ '-' + (d.getMonth() + 1) + '-' + d.getDate();
            return {
                date: date,
                sum: null,
                category: null,
                formVisible: false,
                editDateVisible: false
            };
        },
        components: {
            appProfit: Profit
        },

        computed: {
            profits() {
                return this.$store.getters.getProfits;
            },
            getUserName() {
                return this.$store.getters.getCurrentUserName;
            }
        },
        methods: {
            sendData() {
                this.$store.dispatch('createProfit', {
                    date: this.date,
                    sum: this.sum,
                    category: this.category
                });
                this.sum = this.category = null;
                this.formVisible = false;
            }
        }
    }
</script>

<style scoped></style>
