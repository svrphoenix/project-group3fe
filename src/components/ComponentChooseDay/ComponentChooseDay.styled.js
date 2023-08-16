import { styled } from 'styled-components';

export const DaystasksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 25px;
  padding-top: 20px;
`;

export const DaysTasksContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
`;

export const TasksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
`;

export const TasksTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
`;

export const CreateTasksBtn = styled.button`
  width: 100%;
  height: 48px;
  background: #e3f3ff;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

export const TasksBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TaskItem = styled.li`
  width: 100%;
  height: 108px;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #f7f6f9;
`;

export const TaskDescr = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const TaskInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const Avatar = styled.div`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
`;

export const Priority = styled.div``;

export const ControlPanel = styled.div`
  display: flex;
  gap: 10px;
`;
