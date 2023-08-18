import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import * as SC from './ColumnTasksList.styled';

export const ColumnTasksList = ({ columnTasks }) => {
  return (
    <SC.TasksBox>
      {columnTasks.map(task => (
        <TaskColumnCard key={task.owner._id} task={task} />
      ))}
    </SC.TasksBox>
  );
};
