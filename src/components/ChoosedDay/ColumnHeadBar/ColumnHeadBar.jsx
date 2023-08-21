import TaskModal from '../TaskModal/TaskModal';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from 'utils/getSvg';
import * as SC from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ columnTitle, onToggleModal, category }) => {
  const SVG = getSvg();

  return (
    <>
      <SC.TasksHeader>
        <SC.TasksTitle>{columnTitle}</SC.TasksTitle>
        <SC.IconBtn onClick={onToggleModal} aria-label="add task">
          <AddSvg
            component={SC.Vector}
            sprite={SVG}
            spriteId={'plus-circle-icon'}
          />
        </SC.IconBtn>
      </SC.TasksHeader>
      <TaskModal category={columnTitle} />
    </>
  );
};
