<template>
    <div id="edit-modal" v-if="isVisible === true">
        <div class="modal-header">
            <h6 class="modal-name">Update {{ modalName }}</h6>
            <button type="button" class="close" @click="$emit('closeModal')">
                <span>&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <input
                    type="number"
                    class="form-input"
                    placeholder="Edit sum of profit"
                    v-model="record.sum"
                    v-on:change="updateProfitData">

            <input
                    type="date"
                    class="form-input"
                    placeholder="Edit date"
                    v-model="record.date"
                    v-on:change="updateProfitData">

            <div v-if="this.categories === null || this.categories.length == 0" class="form-group">
                <input type="text" class="form-control"
                       placeholder="Enter category of profit"
                       v-model="newCategory"
                       @change="createCategory">
            </div>
            <div v-else>
                <div class="form-group">
                    <select class="form-control" placeholder="Enter category type"
                            v-model="selectedCategory.id" @change="updateProfitData">
                        <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            modalName: String,
            type: String,
            isVisible: Boolean,
            editableRecord: Object,
            editableRecordIndex: Number
        },
        data() {
            return {
                newCategory: null,
                selectedCategory: {
                    id: null,
                    name: ""
                },
                record: this.editableRecord
            }
        },
        computed: {
            categories() {
                if (this.modalName == "Income") {
                    return this.$store.getters.getCategories.categories.incomes_categories;
                } else {
                    return this.$store.getters.getCategories.categories.expenses_categories;
                }
            }
        },
        watch: {
            editableRecord: {
                immediate: true,
                handler() {
                    this.record = this.editableRecord;
                }
            }
        },
        methods: {
            updateProfitData() {
                this.$store.dispatch('update'+this.modalName, {
                    id: this.record.id,
                    index: this.editableRecordIndex,
                    date: this.record.date,
                    sum: this.record.sum,
                    category_id: this.selectedCategory.id
                });
            },

            createCategory() {
                this.$store.dispatch('createCategory', {
                    category: {
                        name: this.newCategory,
                        record_type: this.modalName
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #edit-modal {
        position: absolute;
        top: 25%;
        left: calc(50% - 200px);
        width: 400px;
        min-height: 400px;
        border: 1px solid #555;
        z-index: 1;
    }
</style>