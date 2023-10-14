<template>
  <view @click="onClick" :class="['iconify', icon]"></view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String
  },
  size: {
    type: [Number, String],
    default: 44
  },
  color: {
    type: String,
    default: 'inherit'
  }
})

const size = computed(() => `${props.size}rpx`)

const emit = defineEmits(['click'])
const onClick = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>
.iconify {
  display: inline-block;
  vertical-align: middle;
  height: v-bind('size');
  width: v-bind('size');
  color: v-bind('props.color');
  &:hover {
    opacity: 0.8;
  }
}
</style>
@/utils/uuuu @/utils/is
