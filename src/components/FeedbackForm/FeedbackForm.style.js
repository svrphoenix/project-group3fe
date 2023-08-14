import { styled } from 'styled-components';

export const Form = styled.form`
  position: relative;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Label = styled.label`
  position: relative;
  display: grid;
  gap: 8px;
  margin-bottom: 14px;
  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border-radius: 8px;
  border: none;
  resize: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #343434;
  background: #f6f6f6;
  &:focus-visible {
    outline: none;
  }
`;

export const ReviewBtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ReviewBtn = styled.button`
  padding: 8px 20px 8px 20px;
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(62, 133, 243, 0.4);
    transform: scale(1.05);
  }
`;

export const MainReviewBtn = styled(ReviewBtn)`
  background: #3e85f3;
  color: #fff;
`;

export const CancelReviewBtn = styled(ReviewBtn)`
  background: #e5edfa;
  color: #343434;
`;

export const EditBtnWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 8px;
  top: -8px;
  right: 0;
`;

const EditBtnGroup = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 1px 2px 1px rgba(62, 133, 243, 0.1),
      0px -1px 2px 1px rgba(62, 133, 243, 0.1),
      1px 0px 2px 1px rgba(62, 133, 243, 0.1),
      -1px 0px 2px 1px rgba(62, 133, 243, 0.1);
    transform: scale(1.05);
  }
`;

export const EditBtn = styled(EditBtnGroup)`
  background: #e5edfa;
`;

export const DeleteBtn = styled(EditBtnGroup)`
  background: rgba(234, 61, 101, 0.2);
`;