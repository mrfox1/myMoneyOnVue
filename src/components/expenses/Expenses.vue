<template>
    <div class="row">
        <div class="items-container">
            <app-expense
                v-for="(expense, index) in expenses"
                :key="expense.id"
                v-bind:expense="expense"
                v-bind:index="index">
            </app-expense>
        </div>
         <form v-if="formVisible" id="formProfit">
            <h3>Add new Expense</h3>
            <h4 @click="editDateVisible = !editDateVisible">
                Today: {{ date }}
                <br>
                <small>Click for edit</small>
            </h4>
            <input type="date" class="form-control" placeholder="Edit date" v-if="editDateVisible" v-model="date">
            <div class="form-group">
                <input type="number" class="form-control" placeholder="Enter sum of cost" v-model="sum">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter category of cost" v-model="category">
            </div>
            <button type="button" class="btn" @click="sendData">Submit</button>
        </form>
        <button class="btn" @click="formVisible = !formVisible">
            Add Expense
        </button>
    </div>
</template>

<script>
    import Expense from './Expense.vue';

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
            appExpense: Expense
        },

        computed: {
            expenses() {
                return this.$store.getters.getExpenses;
            }
        },
        methods: {
            sendData() {
                this.$store.dispatch('createExpense', {
                    date: this.date,
                    sum: this.sum,
                    category: this.category
                });
                this.sum = null;
                this.category = null;
                this.formVisible = false;
            }
        }
    }
</script>

<style scoped>
    #formProfit {
        text-align: center;
        padding-bottom: 20px;
    }

    .form-control {
        text-align: center;
        width: 40%;
        margin-left: 30%;
    }

    .cost-records {
        display: flex;
        justify-content: space-between;
    }
</style>
