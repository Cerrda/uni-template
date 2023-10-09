<template>
  <view class="content">
    <view>测试：{{ testStore.testText }}</view>
    <button @tap="testStore.setTestText('change test text')" size="mini" plain type="primary">保存用户信息</button>
    <button @tap="testStore.clearTestText()">清空测试数据</button>

    <view>个人信息:{{ JSON.stringify(perInfo) }}</view>
  </view>
</template>

<script lang="ts" setup>
import { useTestStore } from '@/store/modules/test'
import type { PersonalInformation } from './index.d.ts'
import { ref } from 'vue'

// pinia
const testStore = useTestStore()

// type
const perInfo = ref<PersonalInformation>()
perInfo.value = {
  name: '张三',
  age: 18
}

// request
</script>

<style lang="scss" scoped></style>
