import { TasksColumn } from '../TasksColumn/TasksColumn';
import * as SC from './TasksColumnsList.styled';

export const TasksColumnsList = ({ daysTasks }) => {
  return (
    <SC.ScrollableContainer>
      <SC.TasksColumnWrapper>
        <TasksColumn columnTasks={daysTasks.todo} category={'to-do'} />
        <TasksColumn
          columnTasks={daysTasks.inProgress}
          category={'in-progress'}
        />
        <TasksColumn columnTasks={daysTasks.done} category={'done'} />
      </SC.TasksColumnWrapper>
    </SC.ScrollableContainer>
  );
};
