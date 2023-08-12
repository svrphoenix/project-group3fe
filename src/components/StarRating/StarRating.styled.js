import { styled } from 'styled-components';

export const StarRatingWrapper = styled.div`
  display: inline-flex;
  position: relative;
  margin: 0 -5px;
`;
export const StarRatingColoredWrapper = styled.div`
  display: flex;
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
  padding: 0 5px;
`;
export const Star = styled.span`
  display: flex;
  flex-shrink: 0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${({ readOnly }) => (readOnly ? 'initial' : 'pointer')};
  padding: 0 5px;
  &.off {
    color: #cec9c1;
  }
  &.on {
    color: #ffac33;
  }
`;
