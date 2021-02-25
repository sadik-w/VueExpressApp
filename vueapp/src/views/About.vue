<template>
  <div>
    <a-form-model layout="inline" :model="formInline">
      <a-form-model-item>
        <span slot="label">hello
          <a-input placeholder="Basic usage" style="width: 100px;"/>
        </span>
        <a-checkbox-group v-model="formInline.checkedList" :options="plainOptions" @change="onChange" />
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>

  export default {
    data() {
      return {
       
      };
    },
    methods: {
     
    },
  };
</script>

<style>
</style>