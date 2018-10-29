<template>
    <div class="cost col-lg-2">
        <div class="card">
            <div class="card-body text-center">
                <p class="card-title">
                    Cost: {{ cost.sum }}
                </p>
            </div>
            <div class="card-text text-center">
                <p>Date: {{ cost.date }}</p>
                <p>Category: {{ cost.category }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['cost']
    }
</script>

<style scoped>
    .cost {
       padding: 10px;
    }

    .card-body {
        height: 25px;
    }
</style>


