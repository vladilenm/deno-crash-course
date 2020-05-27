export interface User {
  id: string
  name: string
}

export interface OakContext {
  response: any
  params?: {id: string}
}