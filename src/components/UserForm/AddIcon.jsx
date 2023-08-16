export const AddIcon = ({ color, size }) => (
  <svg fill={color} stroke={color} width={size} height={size}>
    <use href={process.env.PUBLIC_URL + '/sprite.svg#icon-plus'} />
  </svg>
);
