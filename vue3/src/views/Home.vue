<template>
  <div class="home">
    <div class="formHolder">

      <div class="box" id="box1" @drop="drop" @dragover="dragover" @dragenter="dragenter" @dragleave="dragleave">
        <div class="item1" draggable="true" v-for="(item,index) in undoList" @dragstart="dragstart($event,index)">
          {{item.name}}
        </div>
      </div>

      <div class="box" id="box2" @drop="drop" @dragover="dragover" @dragenter="dragenter" @dragleave="dragleave">
        <div class="item2" draggable="true" v-for="item in finishList" @dragstart="dragstart($event,index)">
          {{item.name}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'Home',
    data() {
      return {
        index: 0,
        insertIndex: -1,
        undoList: [{
            name: 1,
            status: "undo"
          },
          {
            name: 2,
            status: "undo"
          },
          {
            name: 3,
            status: "undo"
          },
          {
            name: 4,
            status: "undo"
          },
        ],
        finishList: [{
            name: 5,
            status: "finish"
          },
          {
            name: 6,
            status: "finish"
          },
          {
            name: 7,
            status: "finish"
          },
          {
            name: 8,
            status: "finish"
          },
        ],
      }
    },
    components: {
      HelloWorld
    },
    created() {},
    methods: {
      drop(e) {
        console.log('被扔下了')
        e.preventDefault()
      },
      dragenter(e) {
        console.log("进去了");
        // e.preventDefault()
      },
      drag(e) {
        console.log("正在拖拽")
        // e.preventDefault()
      },
      dragstart(e, i) {
        console.log("开始拖拽")
        this.index = i;
        // e.preventDefault()
      },
      dragover(e) {
        e.preventDefault()
      },
      dragleave(e) {
        console.log("离开了");
      },
      async getList() {
        let res = await this.API.get('/json/home.json')
        console.log(res)
      }
    },
    mounted() {}
  }
</script>
<style scoped>
  .formHolder {
    width: 1000px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
  }

  .box {
    width: 50%;
    border: 1px solid black;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .item1 {
    cursor: pointer;
    width: 100px;
    margin: 20px;
    display: inline-block;
    border: 1px solid black;
    height: 60px;
    background: coral;
  }

  .item2 {
    cursor: pointer;
    width: 100px;
    margin: 20px;
    border: 1px solid black;
    height: 60px;
    display: inline-block;
    background-color: rgb(127, 80, 255);
  }
</style>