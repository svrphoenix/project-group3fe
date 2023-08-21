import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';

export const StyledAvatar = styled(Avatar)`
  width: 72px;
  height: 76px;
  border: 2px solid var(--first-Icon-Color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--second-Toogle-Month-Day-Bckg-Color);
  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
`;
