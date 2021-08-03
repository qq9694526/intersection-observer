<template>
  <div>
    <ul>
      <li class="item" v-for="num in nums" :key="num" v-exposure="num" :exposure-data="num">{{num}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      nums:20
    }
  },
  created(){

  },
  methods:{
  }
}
</script>
<style scoped>
.item{
  padding: 30px;
  background-color: #ccc;
  margin-bottom: 10px;
  text-align: center;
}
</style>
