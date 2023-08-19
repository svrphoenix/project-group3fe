import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import * as SC from './TaskColumnCard.styled';

export const TaskColumnCard = ({ task }) => {
  return (
    <SC.TaskItem>
      <SC.TaskDescr>{task.title}</SC.TaskDescr>
      <SC.TaskInfo>
        <SC.AvatarWrapper>
          <SC.Avatar $url={task.owner.avatarURL} />
          <SC.Priority
            style={{
              background:
                task.priority === 'high'
                  ? '#EA3D65'
                  : task.priority === 'medium'
                  ? '#F3B249'
                  : task.priority === 'low'
                  ? '#72C2F8'
                  : null,
            }}
          >
            {task.priority}
          </SC.Priority>
        </SC.AvatarWrapper>
        <TaskToolbar />
      </SC.TaskInfo>
    </SC.TaskItem>
  );
};
