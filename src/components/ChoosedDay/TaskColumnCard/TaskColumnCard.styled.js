import { styled } from 'styled-components';

export const TaskItem = styled.li`
  width: 100%;
  height: 108px;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: var(--first-Bckg-Color);
`;

export const TaskDescr = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const TaskInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 32px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
`;

export const AvatarEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: var(--fourth-Bckg-Color);
  color: #fff;
`;

export const Priority = styled.div`
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;
