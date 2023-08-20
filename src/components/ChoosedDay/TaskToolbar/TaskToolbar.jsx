import Popover from '@mui/material/Popover';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, patchTask } from 'redux/tasks/operations';
import { ReactComponent as Remove } from 'images/icons/arrow-circle-broken-right.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-task.svg';
import { ReactComponent as Trash } from 'images/icons/trash-task.svg';
import * as SC from './TaskToolbar.styled';
import { Box } from '@mui/material';

export const TaskToolbar = ({
  onToggleModal,
  id,
  category,
  title,
  date,
  end,
  start,
  priority,
}) => {
  const dispatch = useDispatch();

  const categoryMap = {
    'to-do': ['In-progress', 'Done'],
    'in-progress': ['To-do', 'Done'],
    done: ['To-do', 'In-progress'],
  };

  const [first, second] = categoryMap[category] || [];

  const [anchorEl, setAnchorEl] = useState(null);

  const removeTask = category => {
    dispatch(
      patchTask({
        id,
        task: {
          title,
          start,
          end,
          priority,
          date,
          category,
        },
      })
    );
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <SC.ControlPanel>
      <SC.IconBtn
        aria-describedby={id}
        $variant="contained"
        onClick={handleClick}
        aria-label="remove task"
      >
        <Remove />
      </SC.IconBtn>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', gap: '5px' }}>
            {first}
            <SC.IconBtn onClick={() => removeTask(first.toLowerCase())}>
              <Remove />
            </SC.IconBtn>
          </Box>
          <Box sx={{ display: 'flex', gap: '5px' }}>
            {second}
            <SC.IconBtn onClick={() => removeTask(second.toLowerCase())}>
              <Remove />
            </SC.IconBtn>
          </Box>
        </Box>
      </Popover>
      <SC.IconBtn onClick={() => onToggleModal()} aria-label="edit task">
        <Pencil />
      </SC.IconBtn>
      <SC.IconBtn
        onClick={() => dispatch(deleteTask(id))}
        aria-label="delete task"
      >
        <Trash />
      </SC.IconBtn>
    </SC.ControlPanel>
  );
};
