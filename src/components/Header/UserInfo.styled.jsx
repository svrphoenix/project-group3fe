import styled from 'styled-components';

const accentColor = '#3E85F3';
const nameColor = '#343434';
const whiteColor = '#fff';

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const UserName = styled.p`
  color: ${nameColor};
  font-family: 'Inter Bold';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const UserAvatar = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1.8px solid ${accentColor};
  border-radius: 50%;
  color: ${whiteColor};
  background-color: ${accentColor};
  font-family: 'Inter Bold';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 18px;
  }
`;

export const UserAvatarImg = styled.img`
  width: 32px;
  height: 32px;
  border: 1.8px solid ${accentColor};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
