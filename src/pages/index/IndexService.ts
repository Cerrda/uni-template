import { http } from '@/utils/request'
import type { Todo } from './index.d'

export const getTodosAPI = () =>
  http<Todo[]>({
    url: 'todos'
  })
