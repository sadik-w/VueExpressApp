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
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];
  export default {
    data() {
      return {
        formInline: {
          checkedList: defaultCheckedList,
        },
        indeterminate: true,
        checkAll: false,
        plainOptions,
      };
    },
    methods: {
      onChange(checkedList) {
        this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
        this.checkAll = checkedList.length === plainOptions.length;
      },
      onCheckAllChange(e) {
        Object.assign(this, {
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
      },
    },
  };
</script>

<style>
</style>