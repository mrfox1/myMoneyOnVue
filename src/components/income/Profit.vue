<template>
    <div class="item editable">
        <div class="item-body title">
            <h3 class="item-title">
                Profit: {{ profit.sum }}
            </h3>
        </div>
        <div class="item-data">
            <p class="item-text">Date: {{ profit.date }}</p>
            <p class="item-text">Category: {{ profit.category_name }}</p>
            <a href="#" class="btn edit-btn"
               v-on:click.self="$emit('openModal', profit)"
            >Edit</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['profit'],
        data() {
            return {
                profitData: this.profit,
            };
        },

        computed: {
            categories() {
                return this.$store.getters.getCategories;
            }
        }
    }
</script>

<style scoped>
</style>