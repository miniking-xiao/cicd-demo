<template>
  <div class="layout-left">
    <div class="count-box">
      <span class="font-ssr">装置最大检修总数</span>
      <span class="font-ssb text-white">27</span>
    </div>
    <BorderBox :title="'两重点一重大'">
      <Left1 />
    </BorderBox>
    <BorderBox :title="'安全三同时报告'">
      <Left1 />
    </BorderBox>
    <BorderBox :title="'面积规模'">
      <Left1 />
    </BorderBox>
  </div>
  <div class="layout-right">
    <BorderBox :title="'轮班值守'">
      <Left1 />
    </BorderBox>
    <BorderBox :title="'禁限空目录'">
      <Left1 />
    </BorderBox>
    <BorderBox :title="'装置开停车/装置大检修'">
      <Left1 />
    </BorderBox>
    <BorderBox :title="'第三方单位管理'">
      <Left1 />
    </BorderBox>
  </div>
</template>

<script setup>
import {} from 'vue'
import Left1 from './conpoments/left1.vue'
</script>

<style lang="scss" scoped>
.count-box {
  position: absolute;
  top: -4px;
  left: calc(100% + 14px);
  padding: 14px 13px;
  display: flex;
  align-items: center;
  background-image: url('@/assets/images/总数统计背景.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  white-space: nowrap;
  padding: 10px 30px;
  .font-ssr {
    font-size: 14px;
    color: #a2f4fe;
  }
  .font-ssb {
    font-size: 18px;
    padding-left: 12px;
    color: #fff;
  }
}
</style>
