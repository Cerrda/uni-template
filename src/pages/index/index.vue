<template>
  <view class="content">
    <view>测试：{{ testStore.testText }}</view>
    <button @tap="testStore.setTestText('change test text')" size="mini" plain type="primary">保存用户信息</button>
    <button @tap="testStore.clearTestText()">清空测试数据</button>

    <view>个人信息:{{ JSON.stringify(perInfo) }}</view>

    <view>轮播图:{{ JSON.stringify(bannerList) }}</view>
  </view>
</template>

<script lang="ts" setup>
import { useTestStore } from '@/store/modules/test'
import type { BannerItem, PersonalInformation } from './index.d.ts'
import { ref } from 'vue'
import { getHomeBannerAPI } from './IndexService'
import { onLoad } from '@dcloudio/uni-app'

// pinia
const testStore = useTestStore()

// type
const perInfo = ref<PersonalInformation>()
perInfo.value = {
  name: '张三',
  age: 18
}

// request
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss" scoped></style>
