<template>
    <div class="costs">
        <app-cost 
            v-for="cost in costs" 
            :key="cost.id"
            v-bind:cost="cost">
        </app-cost>
    </div>
</template>

<script>
    import Cost from './Cost.vue';

    export default {
        components: {
            appCost: Cost
        }, 
        computed: {
            costs() {
                return this.$store.getters.getCosts;
            }
        }
    }
</script>
