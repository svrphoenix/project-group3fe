import TaskModal from '../TaskModal/TaskModal';
import { useTranslation } from 'react-i18next';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from 'utils/getSvg';
import * as SC from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ onToggleModal, category }) => {
  const SVG = getSvg();
  const { t } = useTranslation();

  function capitalizeFirstLetter(str) {
    return str
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  return (
    <>
      <SC.TasksHeader>
        <SC.TasksTitle>
          {t(`ChoosedDay.${capitalizeFirstLetter(category)}`)}
        </SC.TasksTitle>
        <SC.IconBtn onClick={onToggleModal} aria-label="add task">
          <AddSvg
            component={SC.Vector}
            sprite={SVG}
            spriteId={'plus-circle-icon'}
          />
        </SC.IconBtn>
      </SC.TasksHeader>
      <TaskModal category={category} />
    </>
  );
};
