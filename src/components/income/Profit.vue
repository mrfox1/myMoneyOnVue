// single income like salary
//
<template>
    <div class="card col-sm-12">
        <div class="card-body text-center title">
            <button type="button" class="close" aria-label="Close" v-if="editProfitVisible" >
                <span aria-hidden="true" @click.self="editProfitVisible = false">&times;</span>
            </button>
            <h3 class="card-title" v-if="!editProfitVisible">
                Profit: {{ profit.sum }} 
            </h3>
            <input 
                type="number" 
                class="form-control" 
                placeholder="Edit sum of profit" 
                v-if="editProfitVisible" 
                v-model="profitData.sum" 
                v-on:change="updateProfitData"
            >
        </div>
        <div class="card-text">
            <p v-if="!editProfitVisible">Date: {{ profit.date }}</p>
            <input 
                type="date" 
                class="form-control" 
                placeholder="Edit date" 
                v-if="editProfitVisible" 
                v-model="profitData.date" 
                v-on:change="updateProfitData"
            >
            <p v-if="!editProfitVisible">Category: {{ profit.category }}</p>
            <input 
                type="text" 
                class="form-control" 
                placeholder="Edit category of profit" 
                v-if="editProfitVisible" 
                v-model="profitData.category" 
                v-on:change="updateProfitData"
            >
            <a href="#" class="card-link" v-on:click.self="editProfitVisible = true">Edit</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['profit', 'index'],
        data() {
            return {
                editProfitVisible: false,
                profitData: this.profit
            };
        },
        methods: {
            updateProfitData() {
                this.editProfitVisible = false;
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
    .card {
        padding: 20px;
        margin: 10px;
    }

    .card:hover {
        background-color: rgb(240, 240, 240)
    }

    .title {
        background-color: #91af72;
        padding: 10px;
        border-bottom: 1px solid #bbb;
    }
</style>