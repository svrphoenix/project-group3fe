import { useTranslation } from 'react-i18next';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from 'utils/getSvg';
import * as SC from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onToggleModal }) => {
  const { t } = useTranslation();
  const SVG = getSvg();

  return (
    <SC.CreateTasksBtn onClick={onToggleModal}>
      <AddSvg component={SC.Vector} sprite={SVG} spriteId={'plus-icon'} />
      {t('ChoosedDay.AddTask')}
    </SC.CreateTasksBtn>
  );
};
