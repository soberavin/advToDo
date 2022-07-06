import { UserModel, UserLoginPayload, UserLoginResponse } from '../models/user';

const mockUserData: UserModel[] = [
  {
      id: 1,
      login: 'User',
      password: 'qwerty'
  },
  {
      id: 2,
      login: 'User2',
      password: 'qwerty'
  }
]

class AuthController {
  getUserData() {
    return mockUserData
  }
  login(authData: UserLoginPayload): UserLoginResponse {
      const userData = this.getUserData()
      for(let i = 0; i < userData.length; i ++) {
        if (userData[i].login === authData.login && userData[i].password === authData.password){
            return {login: userData[i].login, id: userData[i].id}
        }
      }
      return undefined
  }  
  signUp(authData: UserLoginPayload) {
    const userData = this.getUserData()
    let isUnique = false
    for(let i = 0; i < userData.length; i++){
      if(userData[i].login !== authData.login){
        isUnique = true
      } else isUnique = false
    }
    if (isUnique) {
      mockUserData.push({login: authData.login, password: authData.password, id: getRandomInt(1,1000)})
      return true
    } else return false
    
  }
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const authController = new AuthController()

