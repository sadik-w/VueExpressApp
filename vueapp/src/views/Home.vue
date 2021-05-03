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
              <a-icon type="user" /><span>User</span>
            </span>
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
              <a-icon type="team" /><span>Team</span>
            </span>
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
            <h1>{{this.$store.state.name}}</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <div class="test" @click="backTop">
            </div>
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
const s = 'hello'
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      value: false,
      s,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
      collapsed: false,
    };
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  created () {

  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 0) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    },

    login () {
      this.$http.get('/login', {
        params: {
          username: 'Barbara',
          password: 'Lumaq38316'
        }
      })
    },
    onChange (e) { },
  },
}
</script>
<style>
/* $base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.test {
  border: 1px solid $border-dark;
} */
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
  color: floralwhite;
  float: right;
  display: flex;
  font-size: 25px;
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