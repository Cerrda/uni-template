/** 个人信息 */
export type PersonalInformation = {
  /** 姓名 */
  name: string
  /** 年龄 */
  age: number
}

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}
