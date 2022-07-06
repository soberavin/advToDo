import { useState } from "react"
import { Button } from "../../../components/btn"
import { Input } from "../../../components/input"
import { TaskModel } from "../../../../../backend/models/task"
import DeleteIcon from '../../img/delete.png'
import EditIcon from '../../img/edit.png'
import CancelIcon from '../../img/cancel.png'
import { myStore } from "../../../store/myStore"
import { observer } from "mobx-react-lite"

type ListItemProps = {
    task: TaskModel,
  }
  
  
function ListItem(props: ListItemProps) {
    const [editMode, setEditMode] = useState(false)
    const [editInputValue, setEditInputValue] = useState(props.task.text)
  
    function handleDeleteIconClick() {
      const toDeleteTaskListData = { id: props.task.id }
      myStore.deleteUserTaskReq(toDeleteTaskListData)
      .then(response => response.json())
      .then(val => {
        if(val.success){
          myStore.setUserTaskListData(val.data)
        }
      })
    }
  
    function handleApproveEditButtonClick() {
      const toEditTaskData = { id: props.task.id, newTaskText: editInputValue }
      myStore.editTaskListDataReq(toEditTaskData)
      .then(response => response.json())
      .then(val => {
        if(val.success){
          myStore.setUserTaskListData(val.data)
          setEditMode(false)
        }
      })
    }
  
    function handleEditIconClick() {
      setEditMode(true)
    }
  
    function handleCancelIconClick() {
      setEditMode(false)
    }
  
    if (editMode) {
      return (<div className='listItem'>
        <Input onChange={setEditInputValue} value={editInputValue} className='editInput' />
        <Button innerText='OK' className='listClearBtn' onClick={handleApproveEditButtonClick} />
        <img className="ListIcons" onClick={handleCancelIconClick} src={CancelIcon} alt="" />
      </div>)
    } else {
      return (<div className='listItem'> {props.task.text}
        <img className="ListIcons" onClick={handleDeleteIconClick} src={DeleteIcon} alt="" />
        <img className="ListIcons" src={EditIcon} alt="" onClick={handleEditIconClick} />
      </div>)
    }
  
  
  }

  export default observer(ListItem)