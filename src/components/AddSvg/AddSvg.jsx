const AddSvg = ({ component: Component, sprite, spriteId }) => {
  return (
    <Component>
      <use href={`${sprite}#${spriteId}`} />
    </Component>
  );
};

export default AddSvg;
