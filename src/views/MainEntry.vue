<template>
  <a-row type="flex">
    <a-col :flex="4">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        style="width: 256px"
        mode="inline"
        :open-keys="openKeys"
        @openChange="onOpenChange"
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
    </a-col>
    <a-col :flex="1">
      <div class="phone-box">
        <router-view />
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from "vue";
import router from "@/router";
export default {
  name: "MainEntry",
  setup() {
    let flag = ref(true);
    const state = reactive({
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"],
      selectedKeys: [],
    });
    const onOpenChange = (openKeys: string[]) => {
      console.log("xuanz", openKeys);
      const latestOpenKey = openKeys.find(
        (key) => state.openKeys.indexOf(key) === -1
      );
      if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };
    return {
      flag,
      ...toRefs(state),
      onOpenChange,
      handlerSelect: (val: any) => {
        router.replace(val.key);
      },
    };
  },
};
</script>

<style lang="scss" scoped>
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
