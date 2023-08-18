import { IconWrapper } from './UserForm.styled';

const ChevronDownIcon = ({ color, size }) => (
  <svg width={size} height={size} fill={color}>
    <use href={process.env.PUBLIC_URL + '/sprite.svg#icon-chevron-down'} />
  </svg>
);

export const AddIcon = ({ color, size }) => {
  return (
    <IconWrapper color={color} size={size}>
      <use href={process.env.PUBLIC_URL + '/sprite.svg#icon-plus'} />
    </IconWrapper>
  );
};

const AddIconMediaSizes = () => {
  let iconSize = 8;

  if (window.innerWidth <= 375) {
    iconSize = 18;
  } else if (window.innerWidth <= 768) {
    iconSize = 18;
  } else if (window.innerWidth <= 1440) {
    iconSize = 18;
  }
  return <AddIcon color="#fff" size={iconSize} />;
};

export { ChevronDownIcon, AddIconMediaSizes };