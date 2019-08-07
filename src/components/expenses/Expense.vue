<template>
    <div class="item editable">
        <button type="button" class="close-btn close-edit-form" v-if="editCostVisible" >
            <span @click.self="editCostVisible = false">&times;</span>
        </button>
        <div class="item-body title expense-title">
            <h3 class="item-title" v-if="!editCostVisible">
                Cost: {{ cost.sum }}
            </h3>
            <input
                    type="number"
                    class="form-input expense-edit-input"
                    placeholder="Edit sum of this cost"
                    v-if="editCostVisible"
                    v-model="costData.sum"
                    v-on:change="updateCostData"
            >
        </div>

        <div class="item-data">
            <p class="item-text" v-if="!editCostVisible">Date: {{ cost.date }}</p>
            <input
                    type="date"
                    class="form-input expense-edit-input"
                    placeholder="Edit date" 
                    v-if="editCostVisible" 
                    v-model="costData.date" 
                    v-on:change="updateCostData"
            >
            <p class="item-text" v-if="!editCostVisible">Category: {{ cost.category }}</p>
            <input
                    type="text" 
                    class="form-input "
                    placeholder="Edit category of cost" 
                    v-if="editCostVisible" 
                    v-model="costData.category" 
                    v-on:change="updateCostData"
            >
            <a href="#" class="btn edit-btn edit-expense-btn" v-on:click.self="editCostVisible = true">Edit</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['cost', 'index'],
        data() {
            return {
                editCostVisible: false,
                costData: this.cost
            };
        },
        methods: {
            updateCostData() {
                this.editCostVisible = false;
                this.$store.dispatch('updateCost', {
                    index: this.index,
                    date: this.costData.date,
                    sum: this.costData.sum,
                    category: this.costData.category
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


