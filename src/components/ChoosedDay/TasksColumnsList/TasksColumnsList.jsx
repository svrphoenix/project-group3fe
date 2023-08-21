import { TasksColumn } from '../TasksColumn/TasksColumn';
import * as SC from './TasksColumnsList.styled';

export const TasksColumnsList = ({ daysTasks }) => {
  const columnsTitles = {
    todo: 'To do',
    inProgress: 'In progress',
    done: 'Done',
  };

  return (
    <SC.ScrollableContainer>
      <SC.TasksColumnWrapper>
        <TasksColumn
          columnTasks={daysTasks.todo}
          columnTitle={columnsTitles.todo}
          category={'to-do'}
        />
        <TasksColumn
          columnTasks={daysTasks.inProgress}
          columnTitle={columnsTitles.inProgress}
          category={'in-progress'}
        />
        <TasksColumn
          columnTasks={daysTasks.done}
          columnTitle={columnsTitles.done}
          category={'done'}
        />
      </SC.TasksColumnWrapper>
    </SC.ScrollableContainer>
  );
};
