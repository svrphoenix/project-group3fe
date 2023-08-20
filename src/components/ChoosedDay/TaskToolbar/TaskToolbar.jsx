import { ReactComponent as Remove } from 'images/icons/arrow-circle-broken-right.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-task.svg';
import { ReactComponent as Trash } from 'images/icons/trash-task.svg';
import * as SC from './TaskToolbar.styled';

export const TaskToolbar = ({ onToggleModal, id }) => {
  const removeTask = () => {
    console.log('editTask');
  };

  const editTask = () => {
    onToggleModal();
  };
  const deleteTask = () => {
    console.log('deleteTask');
  };

  return (
    <SC.ControlPanel>
      <SC.IconBtn onClick={removeTask} aria-label="remove task">
        <Remove />
      </SC.IconBtn>
      <SC.IconBtn onClick={editTask} aria-label="edit task">
        <Pencil />
      </SC.IconBtn>
      <SC.IconBtn onClick={deleteTask} aria-label="delete task">
        <Trash />
      </SC.IconBtn>
    </SC.ControlPanel>
  );
};
