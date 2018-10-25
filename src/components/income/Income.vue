<template>
    <div class="body">
        <div class="card-columns">
            <app-profit v-for="profit in profits" :key="profit.id" :profit="profit"></app-profit>
        </div>
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
    import Profit from './Profit.vue'

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
            appProfit: Profit
        },
        computed: {
            profits() {
                return this.$store.getters.getProfits;
            }
        }, 
        methods: {
            sendData() {
                this.$store.dispatch('createProfit', {
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
    .body {
        padding: 20px;
    }

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
