<template>
  <router-view />
</template>

<style lang="scss">
.inner-box {
  width: 98%;
  height: 80%;
  //background-color: yellow;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  overflow-y: auto;
  position: absolute;
  top: 5%;
}

.inner-box::-webkit-scrollbar {
  width: 8px;
  height: 1px;
}
.inner-box::-webkit-scrollbar-thumb {
  border-radius: 8px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
}
.inner-box::-webkit-scrollbar-track {
  -webkit-box-shadow: #ededed;
  border-radius: 8px;
  background: #fff;
}
</style>
