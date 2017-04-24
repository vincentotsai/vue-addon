<template>
  <div class="todos">
    <h1>{{ title }}</h1>
    <p v-html="msg2"></p>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <div class="ol-align">
      <ol>
        <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li >
      </ol>
    </div>
  </div>
</template>

<script>
import Store from '../js/store.js'
// console.log(Store)
export default {
  name: 'todos',
  data () {
    return {
      title: 'My todo list.',
      msg2: '<span>Tip:</span>Tap Enter to add.',
      items: Store.fetch(),
      newItem: ''
    }
  },
  watch: {
  	 items: {
      handler: function (items) { Store.save(items) },
      deep: true
    }
  },
  methods:{
  	toggleFinish: function(item){
	  	item.isFinished = !item.isFinished
	  },
	  addNew:function(){
	  	this.items.push({
	  		label:this.newItem,isFinished:false
	  	})
	  	this.newItem=''
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todos {
  text-align:center;
  margin-top:50px;
}
.finished {
	text-decoration: line-through;
}
.ol-align {
  width:200px;
  margin:0 auto;
  padding:0 auto;
}
ol {
  list-style-type:decimal;
  width:150px;
  margin-left:76px;
  margin-top:20px;
}
li {
  text-align:left;
}
</style>
