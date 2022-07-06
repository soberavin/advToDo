import { UserLoginPayload, UserModel } from '../../models/user'
import { ResponseModel } from '../../models/response'

export function loginRequest(
  authData: UserLoginPayload, 
  onSuccess: (userData: UserModel) => void, 
  onError: (error?: string) => void
) {
  const loginReq = new XMLHttpRequest();
  loginReq.open('POST','http://localhost:8080/api/user/login')
  loginReq.send(JSON.stringify(authData))
  loginReq.onload = function loginOnload(e) {
    const reqData = JSON.parse(loginReq.response) as ResponseModel
    if(reqData.success) {
      onSuccess(reqData.data)
    } else {
      onError(reqData.error)
    }
  }
}