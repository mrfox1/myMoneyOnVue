<template>
    <div class="cost col-lg-2">
        <div class="card" >
            <div class="card-body text-center">
                <button type="button" class="close" aria-label="Close" v-if="editCostVisible" >
                <span aria-hidden="true" @click.self="editCostVisible = false">&times;</span>
                </button>
                <p class="card-title">
                    Cost: {{ cost.sum }}
                    <i class='fa fa-pencil-square-o'></i>
                </p>
            </div>
            <div class="card-text text-center">
                 <p v-if="!editCostVisible">Date: {{ cost.date }}</p>
                <input 
                    type="date" 
                    class="form-control" 
                    placeholder="Edit date" 
                    v-if="editCostVisible" 
                    v-model="costData.date" 
                    v-on:change="updateCostData"
                >
                <p v-if="!editCostVisible">Category: {{ cost.category }}</p>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Edit category of cost" 
                    v-if="editCostVisible" 
                    v-model="costData.category" 
                    v-on:change="updateCostData"
                >
            </div>
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
                this.$store.dispatch('updateProfit', {
                    index: this.index,
                    date: this.profitData.date,
                    sum: this.profitData.sum,
                    category: this.profitData.category
                });
            }
        }
    }
</script>

<style scoped>
    .cost {
       padding: 10px;
    }

    .card-body {
        height: 25px;
    }
</style>


