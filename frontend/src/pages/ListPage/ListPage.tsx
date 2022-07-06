import React, { useEffect, useState } from 'react';
import { Button } from '../../components/btn';
import { Input } from '../../components/input';
import './ListPage.css';
import { myStore } from '../../store/myStore';
import { UserGetTasksPayload } from '../../models/user';
import { ItemsList } from './components/itemList';
import { observer } from 'mobx-react-lite';



type ListPageProps = {
}

function ListPage(props: ListPageProps) {
  const [listInputValue, setListInputValue] = useState('')
  

  async function handleClearListButtonClick() {
    if (myStore.userData) {
      const clearUserTaskResponse = await (await fetch('http://localhost:8080/api/user/clearTaskList',
        {
          method: 'POST',
          body: JSON.stringify(myStore.userData.id)
        }
      )).json()
      myStore.setUserTaskListData(clearUserTaskResponse.data)
    }
  }





  function handleAddTaskButtonClick() {
    if (myStore.userData) {
      const newTaskData = { userId: myStore.userData.id, text: listInputValue }

      myStore.addNewTaskReq(newTaskData)
        .then(response => response.json())
        .then(val => {
          if (val.success) {
            myStore.setUserTaskListData(val.data)
          }
        })
        setListInputValue('')
    }
  }


  useEffect(() => {
    if(myStore.userData){
      const getUserTasksReqPayload: UserGetTasksPayload = { userId: myStore.userData.id }
      myStore.getUserTasks(getUserTasksReqPayload)
      .then(response => response.json())
      .then(val => {
        if (val.success){
          myStore.setUserTaskListData(val.data)
        }
      })
    }
  }, [myStore.userTaskListData])


  function handleLogoutButtonClick() {
    myStore.logout()
  }

  return (
    <div className="ListPage">
      <div className="content">
        <div className='listTitle' ><h1 className="listTitleText">list</h1>
          <button onClick={handleClearListButtonClick} className='listClearBtn'>Clear</button>
          <button className='listLogoutBtn' onClick={handleLogoutButtonClick}>Log Out</button>
        </div>

        <ItemsList />

        <div className='listForm'>
          <Input value={listInputValue} onChange={setListInputValue} className='listInput' useDefaultStyles />
          <Button className='listAddBtn' innerText='Add' onClick={handleAddTaskButtonClick} useDefaultStyles />
        </div>
      </div>
    </div>
  );
}

export default observer(ListPage) ;
