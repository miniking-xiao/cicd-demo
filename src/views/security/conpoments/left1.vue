<template>
  <div class="px-5">
    <div class="label">
      <div class="flex items-center">
        <img src="@/assets/images/化工工艺.png" alt="" />
        <span>重点监管危险化工工艺222</span>
      </div>
      <div>
        <span class="hggy count">3</span>
        种
        <span class="ml-5 hggy count">34</span>
        处
      </div>
    </div>
    <div class="label">
      <div class="flex items-center">
        <img src="@/assets/images/化学品.png" alt="" />
        <span>重点监管危险化学品</span>
      </div>
      <div>
        <span class="hggy count">39</span>
        种
        <span class="ml-5 hggy count">43</span>
        处
      </div>
    </div>
    <div class="chart-box pt-5 pb-3">
      <div class="chart">图表</div>
      <div class="chart-list">
        <div class="l-1 chat-l">
          <span>
            <span class="circle mr-1"></span>
            一级危险源
          </span>
          <span class="count pl-6">2</span>
        </div>
        <div class="l-2 chat-l">
          <span>
            <span class="circle mr-1"></span>
            二级危险源
          </span>
          <span class="count pl-6">2</span>
        </div>
        <div class="l-3 chat-l">
          <span>
            <span class="circle mr-1"></span>
            三级危险源
          </span>
          <span class="count pl-6">2</span>
        </div>
        <div class="l-4 chat-l">
          <span>
            <span class="circle mr-1"></span>
            四级危险源
          </span>
          <span class="count pl-6">2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.label {
  font-size: 16px;
  color: #f4f9ff;
  display: flex;
  align-items: center;
  background-image: url(@/assets/images/两重点一重大.png);
  background-size: 100% 100%;
  padding: 12px 15px 12px 0;
  justify-content: space-between;
  .hggy {
    color: orange;
  }
}
.chart-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .chat-l {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }
}
.chart-list {
  font-size: 14px;
  color: #fff;
  .chart {
    width: 55%;
    display: inline-block;
  }
  .circle {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 10px;
  }
  .l-1 {
    .count {
      color: #ff3e30;
    }
    .circle {
      background-color: #ff3e30;
    }
  }
  .l-2 {
    .count {
      color: #da7871;
    }
    .circle {
      background-color: #da7871;
    }
  }
  .l-3 {
    .count {
      color: #ffc130;
    }
    .circle {
      background-color: #ffc130;
    }
  }
  .l-4 {
    .count {
      color: #54e334;
    }
    .circle {
      background-color: #54e334;
    }
  }
}
</style>
