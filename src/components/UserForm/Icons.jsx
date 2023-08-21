import { IconWrapper, StyledAddIcon } from './UserForm.styled';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from '../../utils/getSvg';

const SVG = getSvg();

const ChevronDownIcon = ({ color, size }) => (
  <svg width={size} height={size} fill={color}>
    <use href={process.env.PUBLIC_URL + '/sprite.svg#icon-chevron-down'} />
  </svg>
);

export const AddIcon = ({ color, size }) => {
  return (
    <IconWrapper color={color} width={size} height={size}>
      <use href={process.env.PUBLIC_URL + '/sprite.svg#icon-plus'} />
    </IconWrapper>
  );
};

const AddIconMediaSizes = () => {
  return <AddSvg component={StyledAddIcon} sprite={SVG} spriteId="icon-plus" />;
};

export { ChevronDownIcon, AddIconMediaSizes };
