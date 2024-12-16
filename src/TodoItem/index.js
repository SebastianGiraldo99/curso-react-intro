import './TodoItem.css';
import { PiSealCheckFill } from 'react-icons/pi';
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';

function TodoItem(props){
  const classNameDelete = props.completed ? 'Icon Icon-deleted' : 'Icon Icon-delete';
    return(
      
      <li className="TodoItem">

        <CompleteIcon done={props.completed} onClick={props.onComplete}/>
        
        {/* <PiSealCheckFill/>
        <span onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check-active"} `}>
          V
        </span> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon className={classNameDelete} done={props.completed} onClick={props.onDelete}/>
      {/* <span
        className=""
        onClick={props.onDelete}
      >
        X
      </span> */}
      </li>
    );
}
export {TodoItem};

