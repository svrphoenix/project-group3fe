import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import * as SC from './ColumnTasksList.styled';

export const ColumnTasksList = ({
  showModal,
  onToggleModal,
  columnTasks,
  columnTitle,
}) => {
  return (
    <SC.TasksBox>
      {columnTasks.map(task => (
        <TaskColumnCard
          key={task._id}
          task={task}
          onToggleModal={onToggleModal}
          showModal={showModal}
          columnTitle={columnTitle}
        />
      ))}
    </SC.TasksBox>
  );
};
