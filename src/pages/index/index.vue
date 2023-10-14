<template>
  <view class="content">
    <view>测试：{{ testStore.testText }}</view>
    <Iconify icon="i-mdi-alarm" size="50"></Iconify>
    <button @tap="testStore.setTestText('change test text')" size="mini" plain type="primary">保存用户信息</button>
    <button @tap="testStore.clearTestText()">清空测试数据</button>
    <view text="red 32" font="600" w100 h200 border="1 blue solid">test</view>

    <view>个人信息:{{ JSON.stringify(perInfo) }}</view>

    <view>轮播图:{{ JSON.stringify(todosList) }}</view>
  </view>
</template>

<script lang="ts" setup>
import { useTestStore } from '@/store/modules/test'
import type { Todo, PersonalInformation } from './index.d.ts'
import { ref } from 'vue'
import { getTodosAPI } from './IndexService'
import { onLoad } from '@dcloudio/uni-app'
import Iconify from '@/components/iconify.vue'

// pinia
const testStore = useTestStore()

// type
const perInfo = ref<PersonalInformation>()
perInfo.value = {
  name: '张三',
  age: 18
}

// request
const todosList = ref<Todo[]>([])
const getHomeBannerData = async () => {
  const res = await getTodosAPI()
  todosList.value = res
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss" scoped></style>
