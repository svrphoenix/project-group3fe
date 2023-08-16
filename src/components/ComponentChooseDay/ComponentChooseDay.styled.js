import { styled } from 'styled-components';

export const DaystasksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 25px;
  padding-top: 20px;
`;

export const DaysTasksContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: #fff;
`;

export const TasksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const TasksTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

export const IconBtn = styled.button`
  display: flex;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const CreateTasksBtn = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background: #e3f3ff;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
`;

export const TasksBox = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 20px;
`;

export const TaskItem = styled.li`
  width: 300px;
  height: 108px;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #f7f6f9;
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

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
`;

export const Priority = styled.div`
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;

export const ControlPanel = styled.div`
  display: flex;
  gap: 10px;
`;
