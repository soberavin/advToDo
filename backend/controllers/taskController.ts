import { text } from "stream/consumers";
import { TaskModel } from "../models/task"
import { UserModel } from "../models/user";

let mockTaskData: TaskModel[] = [
    {
        id: 1,
        text: 'HelloWorld',
        userId: 1, 
    },

    {
        id: 2,
        text: 'My name is Slim Shady',
        userId: 1, 
    }
]
  

  class TaskController {
    getTaskData(){
        return mockTaskData;
    }
    getUserTasks(id: UserModel['id']){
        const currentUserTaskData: TaskModel[] = []
        let taskData = this.getTaskData()
        for(let i = 0; i < taskData.length; i++){
            if(taskData[i].userId === id){
                currentUserTaskData.push(taskData[i])
            }
        }
        return currentUserTaskData
    }
    addUserTask(data: {userId: UserModel['id'], text: TaskModel['text']}){
        mockTaskData.push(
            {userId: data.userId, text: data.text, id: getRandomInt(1,1000)}
        )

        return this.getUserTasks(data.userId)
    }
    deleteUserTask(taskId: TaskModel['id']){
        const currentUserTaskData: TaskModel[] = []
        let taskData = this.getTaskData()
        for(let i = 0; i < taskData.length; i++){
            if(taskData[i].id !== taskId ){
                currentUserTaskData.push(taskData[i])
            }
        }
        mockTaskData = currentUserTaskData
        return mockTaskData
    }
    editUserTask(taskId: TaskModel['id'], newTaskText: TaskModel['text']){
        const currentUserTaskData: TaskModel[] = []
        let taskData = this.getTaskData()
        for(let i = 0; i < taskData.length; i++){
            if(taskData[i].id === taskId){
                let editedTask = {userId: taskData[i].userId, id: taskData[i].id, text: newTaskText}
                currentUserTaskData.push(editedTask)
            } else currentUserTaskData.push(taskData[i])
        }
        mockTaskData = currentUserTaskData
        return mockTaskData
    }
    clearTaskList(id: UserModel['id']){
        let clearedTaskData: TaskModel[] = []
        mockTaskData = clearedTaskData
        return mockTaskData
    }
  }
  
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  export const taskController = new TaskController()