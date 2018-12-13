<template>
  <div >
  <table>
  <tr>
    <th>ID</th>
    <th>LogoSrc</th>
    <th>Title</th>
     <th>Description</th>
  </tr>
   
  <tr>
    <td><center style="color:teal;">Create new record</center></td>
    <td><center><input v-model="logosrc"></center></td>
   <td><center><input v-model="title"></center></td>
   <td><center><input v-model="description"></center></td>
  </tr>
  <tr><td></td><td></td><td></td><td><center><button @click="saveNew" style="width:5em;">Save</button></center></td></tr>
  <tr><td><center style="color:teal;">All Records</center></td></tr>
   <tr v-for="item in existing" v-bind:key="item.Title">
    <td>{{item._id}}</td>
    <td><img :src="item.logoSrc" width="250px" height ="250px"></td>
   <td>{{item.title}}</td>
   <td>{{item.description}}</td>
  </tr>
 
</table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      id:"",
      logosrc:"",
      title:"",
      description:"",
      existing:[],
    }
  },
  props: {
    msg: String
  },
  mounted:function(){
    this.getData();
  },
  methods:{
    getData:function(){
      var me=this
      this.$http.get(this.$url + "/posts")
      .then(response=>{
        // console.log(response.data.posts)
        me.existing=response.data.posts
      })
    },
    saveNew:function(){
      if(this.logosrc!=""){
      var self=this
      var request={
        logoSrc : this.logosrc,
         title : this.title,
       description : this.description
      }
       this.$http.post(this.$url + "/posts" , request)
      .then(response=>{
        console.log(response.data.posts)
        self.existing=[];
        self.getData();
      })
      }
      else{
        alert("Please input an image")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
