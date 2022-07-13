<template >
    <div>
        <h1 class="title">你好啊</h1>
        <hr>
        <School/>
        <hr>
        <Student/>
    </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{ School, Student }
    }
</script>

<style scoped>
    .title {
        color:red;
    }
</style>