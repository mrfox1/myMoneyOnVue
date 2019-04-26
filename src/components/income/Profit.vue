<template>
    <div class="item editable">
        <button type="button" class="close-btn close-edit-form" v-if="editProfitVisible" >
            <span @click.self="editProfitVisible = false">&times;</span>
        </button>
        <div class="item-body title">
            <h3 class="item-title" v-if="!editProfitVisible">
                Profit: {{ profit.sum }} 
            </h3>
            <input 
                type="number" 
                class="form-input"
                placeholder="Edit sum of profit" 
                v-if="editProfitVisible" 
                v-model="profitData.sum" 
                v-on:change="updateProfitData"
            >
        </div>

        <div class="item-data">
            <p class="item-text" v-if="!editProfitVisible">Date: {{ profit.date }}</p>
            <input 
                type="date" 
                class="form-input"
                placeholder="Edit date" 
                v-if="editProfitVisible" 
                v-model="profitData.date" 
                v-on:change="updateProfitData"
            >
            <p class="item-text" v-if="!editProfitVisible">Category: {{ profit.category }}</p>
            <input 
                type="text" 
                class="form-input"
                placeholder="Edit category of profit" 
                v-if="editProfitVisible" 
                v-model="profitData.category" 
                v-on:change="updateProfitData"
            >
            <a href="#"
               class="btn edit-btn"
               v-on:click.self="editProfitVisible = true"
               v-if="!editProfitVisible"
            >Edit</a>
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
                    id: this.profitData.id,
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
</style>