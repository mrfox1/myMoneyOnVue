<template>
    <div class="item editable">
        <div class="item-body title">
            <h3 class="item-title" v-if="!editProfitVisible">
                Profit: {{ profit.sum }}
            </h3>
        </div>
        <div class="item-data">
            <p class="item-text" v-if="!editProfitVisible">Date: {{ profit.date }}</p>
            <p class="item-text" v-if="!editProfitVisible">Category: {{ profit.category }}</p>
            <a href="#" class="btn edit-btn"
               v-on:click.self="$emit('openModal', profit)"
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
                profitData: this.profit,
            };
        },

        computed: {
            categories() {
                return this.$store.getters.getCategories;
            }
        },

        methods: {
            updateProfitData() {
                this.editProfitVisible = false;
                this.$store.dispatch('updateProfit', {
                    id: this.profitData.id,
                    index: this.index,
                    date: this.profitData.date,
                    sum: this.profitData.sum,
                    category: this.profitData.selectedCategory.id
                });
            },

            createCategory() {
                this.$store.dispatch('createCategory', {
                    category: {
                        name: this.category,
                        record_type: "Profit"
                    }
                });
            }
        }
    }
</script>

<style scoped>
</style>