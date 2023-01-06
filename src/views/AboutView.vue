<template>
  <a-layout style="height: 100vh">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff; height: 100%">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%; overflow-x: hidden; overflow-y: auto"
            class="scroll-menu"
            @select="handlerSelect"
          >
            <a-sub-menu key="sub1">
              <template #icon>
                <MailOutlined />
              </template>
              <template #title>Navigation One</template>
              <a-menu-item key="/mainentry/demoone">菜单1</a-menu-item>
              <a-menu-item key="/mainentry/demotwo">菜单2</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <a-row type="flex">
            <a-col :flex="4">内容</a-col>
            <a-col :flex="1">
              <div class="phone-box">
                <router-view />
              </div>
            </a-col>
          </a-row>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import router from "@/router";
export default defineComponent({
  components: {},
  setup() {
    return {
      selectedKeys1: ref<string[]>(["2"]),
      selectedKeys2: ref<string[]>(["1"]),
      openKeys: ref<string[]>(["sub1"]),
      handlerSelect: (val: any) => {
        router.replace(val.key);
      },
    };
  },
});
</script>
<style>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
.phone-box {
  width: 300px;
  height: 700px;
  background: url("@/assets/imgs/iPhone.png") no-repeat;
  background-size: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
</style>
