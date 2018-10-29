<template>
    <div class="costs">
        <app-cost 
            v-for="cost in costs" 
            :key="cost.id"
            v-bind:cost="cost">
        </app-cost>
         <form v-if="formVisible" id="formProfit" class="col-xl-4 col-sm-12">
            <h3>Add new Profit</h3>
            <h4 @click="editDateVisible = !editDateVisible">
                Today: {{ date }}
                <br>
                <small>Click for edit</small>
            </h4>
            <input type="date" class="form-control" placeholder="Edit date" v-if="editDateVisible" v-model="date">
            <div class="form-group">
                <input type="number" class="form-control" placeholder="Enter sum of profit" v-model="sum">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter category of profit" v-model="category">
            </div>
            <button type="button" class="btn" @click="sendData">Submit</button>
        </form>
        <button class="btn" @click="formVisible = !formVisible">
            Add Profit
        </button>
    </div>
</template>

<script>
    import Cost from './Cost.vue';

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
            appCost: Cost
        }, 
        computed: {
            costs() {
                return this.$store.getters.getCosts;
            }
        },
        methods: {
            sendData() {
                this.$store.dispatch('createCost', {
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
</style>
