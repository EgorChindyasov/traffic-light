<template>
    <div class="count">
        <span class="count__text">{{ time }}</span>
    </div>    
</template>

<script>
export default {
    props: ['time']
}
</script>

<style scoped>
.count {
    margin: 0 auto;
}

.count__text {
    color: black;
    font-weight: bold;
}
</style>