<template>
    <div id="edit-modal" v-if="isVisible === true">
        <div class="modal-header">
            <h6 class="modal-name">{{ modalName }}</h6>
            <button type="button" class="close" @click="$emit('closeModal')">
                <span>&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div>{{ record }}</div>
            <input
                    type="number"
                    class="form-input"
                    placeholder="Edit sum of profit"
                    v-model="record.sum">
<!--                    v-on:change="updateProfitData"-->


            <input
                    type="date"
                    class="form-input"
                    placeholder="Edit date"
                    v-model="record.date">
<!--                    v-on:change="updateProfitData"-->



<!--            <div v-if="this.categories === null" class="form-group">-->
<!--                <input type="text" class="form-control"-->
<!--                       placeholder="Enter category of profit"-->
<!--                       v-model="category"-->
<!--&lt;!&ndash;                       @change="createCategory">&ndash;&gt;>-->
<!--                <p>{{ this.categories }}</p>-->
<!--            </div>-->
<!--            <div v-else>-->
<!--                <div class="form-group">-->
<!--                    <select class="form-control" placeholder="Enter category type"-->
<!--                            v-model="selectedCategory.id" @change="updateProfitData">-->
<!--                        <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>-->
<!--                    </select>-->
<!--                </div>-->
<!--            </div>-->

            <input
                    type="text"
                    class="form-input"
                    placeholder="Edit category of profit"
                    v-model="record.category">
<!--                    v-on:change="updateProfitData"-->

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            modalName: String,
            type: String,
            isVisible: Boolean,
            editableRecord: Object
        },
        data() {
            return {
                record: this.editableRecord
            }
        },
        watch: {
            editableRecord: {
                immediate: true,
                handler() {
                    this.record = this.editableRecord;
                }
            }
        }
    }
</script>

<style scoped>

</style>