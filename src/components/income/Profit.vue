<template>
    <div class="card col-sm-12">
        <div class="card-body text-center title">
            <h3 class="card-title">
                Profit: {{ profit.sum }} 
            </h3>
        </div>
        <div class="card-text">
            <p>Date: {{ profit.date }}</p>
            <p>Category: {{ profit.category }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['profit']
    }
</script>

<style scoped>
    .card {
        padding: 20px;
        margin: 10px;
    }

    .title {
        background-color: #91af72;
        padding: 10px;
        border-bottom: 1px solid #bbb;
    }
</style>