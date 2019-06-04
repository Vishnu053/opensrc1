<template>
  <div class="table-responsive">
  <table class="table table-hover table-dark table-bordered table-sm">
    <thead>
  <tr class="bg-success">
    <!-- <th scope="col">ID</th> -->
    <th scope="col">LogoSrc</th>
    <th scope="col">Title</th>
     <th scope="col">Description</th>
  </tr>
    </thead>
   <tr><td><center style="color:#684FA1;">Create new record</center></td></tr>
  <tr>
    
    <!-- <td><center><input v-model="logosrc"></center></td> -->
  <td><center><div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Image src" v-model="logosrc"></div></center></td>
  <td><center><div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Title" v-model="title"></div></center></td>
   <td><center><div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Description" v-model="description"></div></center></td>
   <!-- <td><center><input v-model="title"></center></td> -->
   <!-- <td><center><input v-model="description"></center></td> -->
  </tr>
  <tr><td></td><td></td><td><center><button @click="saveNew" style="width:5em;">Save</button></center></td></tr>
  <!-- </table> -->
  <!-- <table width="100%"> -->
  <tr><td><center style="color:#684FA1;">All Records</center></td></tr>
   <tr v-for="item in existing" v-bind:key="item.Title">
    <!-- <td>{{item._id}}</td> -->
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
      .then(response=>{me.existing=response.data.posts})
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
        self.existing=[];
        self.getData();
        self.id="";
        self.logosrc="";
        self.title="";
        self.description="";
      })
      }
      else{
        alert("Please input an image")
      }
    }
  }
}
</script>

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
</style>
