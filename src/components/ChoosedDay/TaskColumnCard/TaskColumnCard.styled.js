import { styled } from 'styled-components';

export const TaskItem = styled.li`
  width: 100%;
  height: 108px;
  padding: 14px;
  border-radius: 8px;
  border: var(--taskitem-border);
  background: var(--first-Bckg-Color);
`;

export const TaskDescr = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--first-Text-Color);
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

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: var(--taskavatar-border);
  background-image: $url(${props => props.url});
`;

export const Priority = styled.div`
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;
