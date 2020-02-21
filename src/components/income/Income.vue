<template>
    <div class="row" v-if="getUserName !== ''">
        <div class="items-container">
            <app-profit v-for="(profit, index) in profits"
                        :key="profit.id" :profit="profit" :index="index"
                        @openModal="openEditModal">
            </app-profit>
        </div>
        <form v-if="formVisible" id="new-record-form">
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
            <div v-if="this.categories === null" class="form-group">
                <input type="text" class="form-control"
                       placeholder="Enter category of profit"
                       v-model="category"
                       @change="createCategory">
                <p>{{ this.categories }}</p>
            </div>
            <div v-else>
                <div class="form-group">
                    <select class="form-control" placeholder="Enter category type" v-model="selectedCategory.id">
                        <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
                    </select>
                </div>
            </div>
            <button type="button" class="btn" @click="sendData">Submit</button>
        </form>
        <button class="btn" @click="formVisible = !formVisible">
            Add Profit
        </button>

        <edit-modal v-if="currentProfit !== null || currentProfit !== undefined" :editableRecord="currentProfit" :isVisible="modalVisible" :modal-name="editModalName"
                    @closeModal="modalVisible = false"></edit-modal>
    </div>
</template>

<script>
    import Profit from './Profit.vue';
    import EditModal from '../modals/EditRecords.vue';

    export default {
        data() {
            const d = new Date();
            const date = d.getFullYear()+ '-' + (d.getMonth() + 1) + '-' + d.getDate();
            return {
                editModalName: "Update Profit",
                date: date,
                sum: null,
                category: null,
                formVisible: false,
                editDateVisible: false,
                selectedCategory: {
                    id: null,
                    name: ""
                },
                modalVisible: false,
                currentProfit: null
            };
        },
        components: {
            appProfit: Profit,
            editModal: EditModal
        },

        computed: {
            profits() {
                return this.$store.getters.getProfits;
            },
            getUserName() {
                return this.$store.getters.getCurrentUserName;
            },
            categories() {
                return this.$store.getters.getCategories;
            }
        },
        methods: {
            // method in emited event from profit to parent component
            openEditModal(value) {
                this.modalVisible = true;
                this.currentProfit = value;
                console.log(value)
                console.log(this.currentProfit)
            },

            sendData() {
                this.$store.dispatch('createProfit', {
                    date: this.date,
                    sum: this.sum,
                    category_id: this.selectedCategory.id
                });
                this.sum = this.category = null;
                this.formVisible = false;
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

<style scoped></style>
