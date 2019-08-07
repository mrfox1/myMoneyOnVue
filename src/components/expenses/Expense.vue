<template>
    <div class="item editable">
        <button type="button" class="close-btn close-edit-form" v-if="editCostVisible" >
            <span @click.self="editCostVisible = false">&times;</span>
        </button>
        <div class="item-body title expense-title">
            <h3 class="item-title" v-if="!editCostVisible">
                Sum: {{ expense.sum }}
            </h3>
            <input
                    type="number"
                    class="form-input expense-edit-input"
                    placeholder="Edit sum of this cost"
                    v-if="editCostVisible"
                    v-model="expenseData.sum"
                    v-on:change="updateExpenseData"
            >
        </div>

        <div class="item-data">
            <p class="item-text" v-if="!editCostVisible">Date: {{ expense.date }}</p>
            <input
                    type="date"
                    class="form-input expense-edit-input"
                    placeholder="Edit date" 
                    v-if="editCostVisible" 
                    v-model="expenseData.date"
                    v-on:change="updateExpenseData"
            >
            <p class="item-text" v-if="!editCostVisible">Category: {{ expense.category }}</p>
            <input
                    type="text" 
                    class="form-input "
                    placeholder="Edit category of cost" 
                    v-if="editCostVisible" 
                    v-model="expenseData.category"
                    v-on:change="updateExpenseData"
            >
            <a href="#" class="btn edit-btn edit-expense-btn" v-on:click.self="editCostVisible = true">Edit</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['expense', 'index'],
        data() {
            return {
                editCostVisible: false,
                expenseData: this.expense
            };
        },
        methods: {
            updateExpenseData() {
                this.editCostVisible = false;
                this.$store.dispatch('updateExpense', {
                    id: this.expenseData.id,
                    index: this.index,
                    date: this.expenseData.date,
                    sum: this.expenseData.sum,
                    category: this.expenseData.category
                });
            }
        }
    }
</script>

<style scoped>
    .expense-title {
        color: #c0392b;
        border-bottom-color: #c0392b;
    }

    .expense-edit-input:focus { outline-color: #c0392b; }
</style>


