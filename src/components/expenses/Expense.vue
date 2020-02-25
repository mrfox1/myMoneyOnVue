<template>
    <div class="item editable">
        <div class="item-body title expense-title">
            <h3 class="item-title">
                Sum: {{ expense.sum }}
            </h3>
        </div>

        <div class="item-data">
            <p class="item-text">Date: {{ expense.date }}</p>
            <p class="item-text">Category: {{ expense.category_name }}</p>
            <a href="#" class="btn edit-btn edit-expense-btn"
               v-on:click.self="$emit('openModal', expense, index)"
            >Edit</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['expense', 'index'],
        data() {
            return {
                expenseData: this.expense
            };
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


