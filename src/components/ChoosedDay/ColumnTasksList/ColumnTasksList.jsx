import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import * as SC from './ColumnTasksList.styled';

export const ColumnTasksList = ({ showModal, onToggleModal, columnTasks }) => {
  return (
    <SC.TasksBoxOuter>
      <SC.TasksBox>
        {columnTasks.map(task => (
          <TaskColumnCard
            key={task._id}
            task={task}
            onToggleModal={onToggleModal}
            showModal={showModal}
          />
        ))}
      </SC.TasksBox>
    </SC.TasksBoxOuter>
  );
};
