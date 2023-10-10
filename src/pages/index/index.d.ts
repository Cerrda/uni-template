/** 个人信息 */
export type PersonalInformation = {
  /** 姓名 */
  name: string
  /** 年龄 */
  age: number
}

/** Todo */
export type Todo = {
  /** 用户Id */
  userId: number
  /** id */
  id: number
  /** todo内容 */
  title: string
  /** 是否完成 */
  completed: boolean
}
