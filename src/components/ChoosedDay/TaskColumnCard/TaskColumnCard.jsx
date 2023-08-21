import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import TaskModal from '../TaskModal/TaskModal';
import * as SC from './TaskColumnCard.styled';
import useModalToggle from 'hooks/useModalToggle';
import { useSelect } from '@mui/base';
import { selectUser } from 'redux/auth/selectors';

export const TaskColumnCard = ({ task }) => {
  const { showModal, onToggleModal } = useModalToggle();
  const user = useSelect(selectUser);
  console.log(user);

  return (
    <>
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
