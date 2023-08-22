import Popover from '@mui/material/Popover';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, patchTask } from 'redux/tasks/operations';
import { Box } from '@mui/material';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from 'utils/getSvg';
import * as SC from './TaskToolbar.styled';

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

  const SVG = getSvg();

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
        <AddSvg
          component={SC.Vector}
          sprite={SVG}
          spriteId={'arrow-circle-icon'}
        />
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
        <Box
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            backgroundColor: 'var(--LogReg-Form-Color)',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <SC.PopupBtn onClick={() => removeTask(first.toLowerCase())}>
              {first.replace(/-/g, ' ')}
              <AddSvg
                component={SC.Vector}
                sprite={SVG}
                spriteId={'arrow-circle-icon'}
              />
            </SC.PopupBtn>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <SC.PopupBtn onClick={() => removeTask(second.toLowerCase())}>
              {second.replace(/-/g, ' ')}
              <AddSvg
                component={SC.Vector}
                sprite={SVG}
                spriteId={'arrow-circle-icon'}
              />
            </SC.PopupBtn>
          </Box>
        </Box>
      </Popover>
      <SC.IconBtn onClick={() => onToggleModal()} aria-label="edit task">
        <AddSvg component={SC.Vector} sprite={SVG} spriteId={'pencil-icon'} />
      </SC.IconBtn>
      <SC.IconBtn
        onClick={() => dispatch(deleteTask(id))}
        aria-label="delete task"
      >
        <AddSvg
          component={SC.Vector}
          sprite={SVG}
          spriteId={'trash-first-icon'}
        />
      </SC.IconBtn>
    </SC.ControlPanel>
  );
};
