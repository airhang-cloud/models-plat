const scrollbar = {
  /*滚动条整体样式*/
  width: "10px" /*高宽分别对应横竖滚动条的尺寸*/,
  height: "1px",
};

const scrollbarthumb = {
  /*滚动条整体样式*/ "border-radius": "10px",
  "-webkit-box-shadow": "inset 0 0 5px rgba(0,0,0,0.2)",
  background: "#535353",
};

const scrollbartrack = {
  "-webkit-box-shadow": "inset 0 0 5px rgba(0,0,0,0.2)",
  "border-radius": "10px",
  background: "#EDEDED",
};
export default {
  mounted(el, bind) {
    console.log("mounted", bind.value);
    if (bind.value) {
      el.style.setProperty("overflow", "auto");
    }
  },
  updated(el, bind) {
    console.log("update", bind.value);
  },
};

/*
在 Vue3 中，自定义指令的钩子函数主要有如下七种（这块跟 Vue2 差异较大）：

created：在绑定元素的 attribute 或事件监听器被应用之前调用。在指令需要附加在普通的 v-on 事件监听器调用前的事件监听器中时，这很有用。

beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用。

mounted：在绑定元素的父组件被挂载后调用，大部分自定义指令都写在这里。

beforeUpdate：在更新包含组件的 VNode 之前调用。

updated：在包含组件的 VNode 及其子组件的 VNode 更新后调用。

beforeUnmount：在卸载绑定元素的父组件之前调用

unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次。

虽然钩子函数比较多，看着有点唬人，不过我们日常开发中用的最多的其实是 mounted 函数。
*/
