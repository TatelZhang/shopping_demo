<template>
    <div>
        <h1>test 1</h1>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        mounted(){
            console.log(this.$route.path);
        }
    }
</script>
