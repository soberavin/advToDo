export type UserModel = {
  id: number
  login: string
  password: string
}

export type UserLoginPayload = {
  login: UserModel['login']
  password: UserModel['password']

}

export type UserLoginResponse = {
  id: UserModel['id']
  login: UserModel['login']
} | undefined

export type UserGetTasksPayload = {
  userId: UserModel['id']
}