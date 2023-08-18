import { ReactComponent as PlusCircle } from 'images/icons/plus-circle.svg';
import * as SC from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ columnTitle, onToggleModal }) => {
  return (
    <SC.TasksHeader>
      <SC.TasksTitle>{columnTitle}</SC.TasksTitle>
      <SC.IconBtn onClick={onToggleModal} aria-label="add task">
        <PlusCircle />
      </SC.IconBtn>
    </SC.TasksHeader>
  );
};
