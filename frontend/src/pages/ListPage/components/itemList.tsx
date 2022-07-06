import { myStore } from "../../../store/myStore";
import ListItem  from "./listItem";


  
 export function ItemsList() {
    let tempItemsList: JSX.Element[] = []
    for (let i = 0; i < myStore.userTaskListData.length; i++) {
      tempItemsList.push(<ListItem key={myStore.userTaskListData[i].id}  task={myStore.userTaskListData[i]} />)
    }
    return <div className='itemsList'>{tempItemsList}</div>
  }
  
 