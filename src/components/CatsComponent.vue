<template>
    <div>
        <p v-for="cat in state.cats" :key="cat._id">
            Name: {{ cat.name}} <br> Age: {{ cat.age }},<br> Color: {{ cat.color }}, <br> Description: {{ cat.description }},<br> Price: {{ cat.price }}, <br>in stock: {{ cat.inStock }}</p>
    </div>
    <!--reactive or refs-->
</template>

<script setup > 
import { ref } from 'vue' 

        const state = ref({
            error: null,
            cats: null
        })
//download axios
const load = async () =>{
    try {
        const catsResponse = await fetch('https://cats-restapi.onrender.com/api/cats');
            await catsResponse.json().then(catsData => {
            state.value.cats = catsData
        })
    } catch(err){
        state.value.error = err.message
        console.log(state.value.error)
    
    }  
}

//onMounted(
     await load()
//)



</script>

<style lang="scss" scoped>

</style>

