import { http } from '@/utils/request'
import type { BannerItem } from './index.d'

export const getHomeBannerAPI = () =>
  http<BannerItem[]>({
    url: '/home/banner'
  })
