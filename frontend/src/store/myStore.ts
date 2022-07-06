import { makeAutoObservable } from "mobx"
import { UserGetTasksPayload, UserLoginResponse } from "../models/user"
import type { UserLoginPayload } from "../models/user"
import { TaskModel } from "../models/task"

export class Store {
    constructor() {
        makeAutoObservable(this)
    }

    userData: UserLoginResponse
    setUserData(value: UserLoginResponse) {
        this.userData = value
    }

    userTaskListData: TaskModel[] = []
    setUserTaskListData(value: TaskModel[]){
        this.userTaskListData = value
    }

    logout() {
        this.setUserData(undefined)
    }

    //* Взаимодействие с авторизацией


    signInReq(reqData: UserLoginPayload) {
        const authReq = fetch('http://localhost:8080/api/user/login', {
            method: 'POST',
            body: JSON.stringify(reqData)
        })
        return authReq
    }

    signUpReq(reqData: UserLoginPayload) {
        const sendNewUserData = fetch('http://localhost:8080/api/user/signup', {
            method: 'POST',
            body: JSON.stringify(reqData)
        })
        return sendNewUserData
    }

    signIn(reqData: UserLoginPayload) {
        this.signInReq(reqData)
            .then(response => response.json())
            .then(val => {
                if (val.success) {
                    this.setUserData(val.data)
                } else alert(val.error)
            })
    }

    signUp(reqData: UserLoginPayload, callback: () => void) {
        return this.signUpReq(reqData)
        .then(response => response.json())
            .then(resData => {
                if (resData.success) {
                    alert('Successfully registered')
                } else {
                    alert('Invalid input data')
                }
            })
    }

    //* Взаимодействия с айтемами листа

    getUserTasks(payload: UserGetTasksPayload) {
        const resultPromise = fetch('http://localhost:8080/api/user/tasks',{
          method: 'POST',
          body: JSON.stringify(payload)
        })
        return resultPromise
      }

      addNewTaskReq(newTaskData: { userId: number, text: string }) {
        const sendUserTask = fetch('http://localhost:8080/api/user/addTask',
          {
            method: 'POST',
            body: JSON.stringify(newTaskData)
          }
        )
        return sendUserTask
      }    

      deleteUserTaskReq(payload: {id: number}){
        const delUserTaskReq = fetch('http://localhost:8080/api/user/deleteTask',
        {
          method: 'POST',
          body: JSON.stringify(payload)
        })
        return delUserTaskReq
      }

      editTaskListDataReq(payload: {id: number, newTaskText: string}){
        const editUserTaskReq = fetch('http://localhost:8080/api/user/editTask', 
        {
          method: 'POST',
          body: JSON.stringify(payload)
        })
        return editUserTaskReq
      }
}


export const myStore = new Store()