<template>
    <div class="row" v-if="getUserName !== ''">
        <div class="items-container">
            <app-expense v-for="(expense, index) in expenses"
                         :key="expense.id" :expense="expense" :index="index"
                         @openModal="openEditModal">
            </app-expense>
        </div>
         <form v-if="formVisible" id="new-record-form">
            <h3>Add new Expense</h3>
            <h4 @click="editDateVisible = !editDateVisible">
                Today: {{ date }}
                <br>
                <small>Click for edit</small>
            </h4>
            <input type="date" class="form-control" placeholder="Edit date" v-if="editDateVisible" v-model="date">
            <div class="form-group">
                <input type="number" class="form-control" placeholder="Enter sum of cost" v-model="sum">
            </div>
             <div v-if="this.categories === null" class="form-group">
                 <input type="text" class="form-control"
                        placeholder="Enter category of profit"
                        v-model="category"
                        @change="createCategory">
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
            Add Expense
        </button>

        <edit-modal  :editableRecord="currentExpense" :isVisible="modalVisible" :modal-name="editModalName"
                     :editable-record-index="currentExpenseIndex"
                     @closeModal="modalVisible = false"></edit-modal>
    </div>
</template>

<script>
    import Expense from './Expense.vue';
    import EditModal from '../modals/EditRecords.vue';

    export default {
        data() {
            const d = new Date();
            const date = d.getFullYear()+ '-' + (d.getMonth() + 1) + '-' + d.getDate();
            return {
                editModalName: "Expense",
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
                currentExpense: null,
                currentExpenseIndex: null
            };
        },

        components: {
            appExpense: Expense,
            editModal: EditModal
        },

        computed: {
            expenses() {
                return this.$store.getters.getExpenses;
            },
            getUserName() {
                return this.$store.getters.getCurrentUserName;
            },
            categories() {
                return this.$store.getters.getCategories.categories.expenses_categories;
            }
        },
        methods: {
            // method in emited event from profit to parent component
            openEditModal(value, index) {
                this.modalVisible = true;
                this.currentExpense = value;
                this.currentExpenseIndex = index;
            },
            sendData() {
                this.$store.dispatch('createExpense', {
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
                        record_type: "Expense"
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .cost-records {
        display: flex;
        justify-content: space-between;
    }
</style>
