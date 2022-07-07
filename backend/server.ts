import http from 'http'
import { authController } from './controllers/auth'
import { UserGetTasksPayload, UserLoginPayload } from './models/user';
import { ResponseModel } from './models/response'
import { TaskModel } from './models/task';
import { taskController } from './controllers/taskController';


http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const url = req.url
    const method = req.method

    if(method === 'POST') {
        if(url === '/api/user/login') {
            let data = ''
            req.on('data', (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                const authData = JSON.parse(data) as UserLoginPayload
                const loginResult = authController.login(authData)
                if(loginResult) {
                    const responseData: ResponseModel = {
                        success: true,
                        data: loginResult
                    }
                    res.end(JSON.stringify(responseData))
                } else {
                    const responseData: ResponseModel = {
                        success: false,
                        error: 'not valid'
                    }
                    res.end(JSON.stringify(responseData))
                }
            })
        } else if(url === '/api/user/signup'){
            let data = ''
            req.on('data', (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                const authData = JSON.parse(data) as UserLoginPayload
                const signUpResult = authController.signUp(authData)
                if(signUpResult) {
                    const responseData: ResponseModel = {
                        success: true,
                        data: signUpResult
                    }
                    res.end(JSON.stringify(responseData))
                } else {
                    const responseData: ResponseModel = {
                        success: false,
                        error: 'not valid'
                    }
                    res.end(JSON.stringify(responseData))
                }
            })
        } else if(url === '/api/user/tasks') {
            let data = ''
            req.on('data', (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                const userData = JSON.parse(data) as UserGetTasksPayload
                const taskResult = taskController.getUserTasks(userData.userId)
                const responseData: ResponseModel = {
                    success: true,
                    data: taskResult
                }
                res.end(JSON.stringify(responseData))
            })

        } else if(url === '/api/user/addTask') {
            let data = ''
            req.on('data', (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                const userData = JSON.parse(data)
                const taskResult = taskController.addUserTask(userData)
                const responseData: ResponseModel = {
                    success: true,
                    data: taskResult
                }
                res.end(JSON.stringify(responseData))
            })

        } else if (url === '/api/user/deleteTask'){
            let data = ''
            req.on('data', (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                const userData = JSON.parse(data)
                const taskResult = taskController.deleteUserTask(userData.id)
                const responseData: ResponseModel = {
                    success: true,
                    data: taskResult
                }
                res.end(JSON.stringify(responseData))
            })
        } else if (url === '/api/user/editTask'){
            let data = ''
            req.on('data', (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                const userData = JSON.parse(data)
                const taskResult = taskController.editUserTask(userData.id, userData.newTaskText)
                const responseData: ResponseModel = {
                    success: true,
                    data: taskResult
                }
                res.end(JSON.stringify(responseData))
            })
        } else if(url === '/api/user/clearTaskList') {
            let data = ''
            req.on('data', (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                const userData = JSON.parse(data) as UserGetTasksPayload
                const taskResult = taskController.clearTaskList(userData.userId)
                const responseData: ResponseModel = {
                    success: true,
                    data: taskResult
                }
                res.end(JSON.stringify(responseData))
            })

        }
    }   



}).listen(8080); 