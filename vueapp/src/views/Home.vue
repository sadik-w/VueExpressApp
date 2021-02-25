<template>
  <div class="home">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" collapsible>
        <div class="logo" />
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="user" /><span>User</span></span>
            <a-menu-item key="3">
              Tom
            </a-menu-item>
            <a-menu-item key="4">
              Bill
            </a-menu-item>
            <a-menu-item key="5">
              Alex
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="team" /><span>Team</span></span>
            <a-menu-item key="6">
              Team 1
            </a-menu-item>
            <a-menu-item key="8">
              Team 2
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <a-icon type="file" />
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <div class="login" @click="login">
            <span>王</span>
          </div>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>home</a-breadcrumb-item>
            <a-breadcrumb-item>view</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <a-checkbox @change="onChange" v-model="value">
              <div style="display: inline-block" v-if="value">
                <div style="display: inline-block;margin-right: 5px;">金额</div>
                <a-input style="width: 100px;height: 25px;"></a-input>
                <div style="display: inline-block;margin-left: 5px;">/元</div>
              </div>
            </a-checkbox>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        value: false,
        radioStyle: {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        },
        collapsed: false,
      };
    },
    methods: {
      login() {
        this.$http.get('/login', {
          params: {
            username: 'Barbara',
            password: 'Lumaq3831'
          }
        })
      },
      onChange(e) {},
    },
  }
</script>
<style>
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }

  .home {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .login {
    float: right;
    display: flex;
    font-size: 17px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    margin: 5px 100px 0px 100px;
    background-color: coral;
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }
</style>