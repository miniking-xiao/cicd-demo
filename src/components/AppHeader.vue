<template>
  <div class="app-header">
    <div class="app-header-left">
      <div class="weather">
        <div class="tep">34°</div>
        <div class="weater-desc">
          <p>请</p>
          <p>哈</p>
        </div>
        <div class="text-base">2020-20-32</div>
        <!-- <div class="text-base">{{ state.currentTime }}</div>
        <div class="tep">{{ state.weather.temperature_float }}°</div>
        <div class="weater-desc">
          <p>{{ state.weather.weather }}</p>
          <p>{{ state.weather.winddirection }}</p>
        </div>
        <div class="text-base">{{ state.currentTime }}</div>
         -->
      </div>
      <a class="nav-button">数字孪生</a>
    </div>
    <div class="app-header-center">安全基础</div>
    <div class="app-header-right">
      <div class="nav-button">
        <span class="back-btn">返回</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: var(--app-header-height);
  left: 0;
  top: 0;
  color: #ffb432;
  background-image: url('@/assets/imgs/顶部导航背景.png'),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.01));
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: auto 100%;
  z-index: 1000;
}
.app-header-left {
  width: 28%;
  height: 68px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  .weather {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .tep {
      font-size: 33px;
      padding-left: 72px;
      background-image: url('@/assets/imgs/duoyun.png');
      background-repeat: no-repeat;
      background-position: 24px center;
    }
    .weater-desc {
      font-size: 12px;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .text-base {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
}
.nav-button {
  width: 173px;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-image: url('@/assets/imgs/导航按钮.png');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.app-header-center {
  line-height: 72px;
  font-size: 40px;
  background-image: linear-gradient(to bottom, #ffb432, #ff9b2f);
  background-clip: text;
  color: transparent;
  font-family: c-huakang;
}
.app-header-right {
  width: 28%;
  height: 68px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .back-btn {
    padding-left: 24px;
    background-image: url('@/assets/imgs/返回.png');
    background-repeat: no-repeat;
    background-position: 0 center;
  }
}
</style>
