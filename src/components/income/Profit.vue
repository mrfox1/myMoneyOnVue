<template>
     <div class="col-sm-5 col-md-3">
        <div class="card">
            <div class="card-body title">
                <h3 class="card-title">
                    Profit
                </h3>
            </div>
            <div class="card-text">
                <p>Date: 2018-10-25</p>
                <p>Sum: 11</p>
                <p>Category: Salary</p>
            </div>
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
        margin: 20px;
    }

    .title {
        background-color: #91af72;
        padding: 10px;
        border-bottom: 1px solid #bbb;
    }
</style>