import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import TaskModal from '../TaskModal/TaskModal';
import useModalToggle from 'hooks/useModalToggle';
import * as SC from './TaskColumnCard.styled';

export const TaskColumnCard = ({ task }) => {
  const { showModal, onToggleModal } = useModalToggle();

  const user = useSelector(selectUser);

  return (
    <>
      <SC.TaskItem>
        <SC.TaskDescr>{task.title}</SC.TaskDescr>
        <SC.TaskInfo>
          <SC.AvatarWrapper>
            {user.avatarURL ? (
              <SC.Avatar src={user.avatarURL} />
            ) : (
              <SC.AvatarEmpty>{user.name.slice(0, 1)}</SC.AvatarEmpty>
            )}
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
              {task.priority.replace(/^./, task.priority[0].toUpperCase())}
            </SC.Priority>
          </SC.AvatarWrapper>
          <TaskToolbar
            onToggleModal={onToggleModal}
            id={task._id}
            category={task.category}
            title={task.title}
            date={task.date}
            end={task.end}
            start={task.start}
            priority={task.priority}
          />
        </SC.TaskInfo>
      </SC.TaskItem>
      <TaskModal
        showModal={showModal}
        onToggleModal={onToggleModal}
        id={task._id}
        category={task.category}
        title={task.title}
        date={task.date}
        end={task.end}
        start={task.start}
        priority={task.priority}
      />
    </>
  );
};
