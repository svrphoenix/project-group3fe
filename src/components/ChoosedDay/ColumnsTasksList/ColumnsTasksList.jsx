import { TasksColumn } from '../TasksColumn/TasksColumn';
import * as SC from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ currentDay }) => {
  return (
    <SC.ScrollableContainer>
      <SC.DaystasksWrapper>
        <TasksColumn currentDay={currentDay} />
      </SC.DaystasksWrapper>
    </SC.ScrollableContainer>
  );
};
