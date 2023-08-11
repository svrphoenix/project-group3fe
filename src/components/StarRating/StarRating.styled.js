import { styled } from 'styled-components';

export const StarRatingWrapper = styled.div`
  display: inline-flex;
  gap: 10px;
  position: relative;
`;
export const StarRatingColoredWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const ColoredStar = styled.span`
  display: flex;
  flex-shrink: 0;
  color: #ffac33;
`;
export const Star = styled.span`
  display: flex;
  flex-shrink: 0;
  color: #cec9c1;
`;
