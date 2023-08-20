import { styled } from 'styled-components';

// export const WeekdayBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   background-color: var(--second-Bckg-Color);
//   border: var(--taskitem-border);
//   border-radius: 8px;
//   padding: 14px 18px;

//   @media screen and (max-width: 768px) {
//     padding: 10px 32px;
//   }
// `;

// export const Weekday = styled.div`
//   padding: 16px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   cursor: pointer;
//   color: var(--sixth-Text-Color);

//   &:nth-last-child(-n + 2) {
//     color: var(--second-Text-Color);
//   }

//   @media screen and (max-width: 335px) {
//     font-size: 4.776vw;
//     padding: 16px 8px;
//   }
// `;

// export const DayNumber = styled.div`
//   color: var(--second-Text-Color);
//   font-family: 'Inter Bold';
//   font-size: 12px;
//   line-height: 1.17;
//   margin-top: 6px;
//   padding: 4px 6px;

//   &.current-date {
//     color: #fff;
//     border-radius: 8px;
//     background: #3e85f3;
//   }

//   @media screen and (min-width: 768px) {
//     font-size: 16px;
//     line-height: 1.13;
//     margin-top: 4px;
//   }
// `;

export const WeekdayBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--second-Bckg-Color);
  border: var(--taskitem-border);
  border-radius: 8px;
  padding: 14px 18px;

  @media screen and (min-width: 768px) {
    padding: 10px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
  }
`;

export const Weekday = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 26px;
  height: 46px;
  color: var(--sixth-Text-Color);
  font-family: 'Inter SemiBold';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;

  &:nth-last-child(-n + 2) {
    color: var(--second-Text-Color);
  }

  @media screen and (max-width: 335px) {
    font-size: 4.776vw;
    padding: 16px 8px;
  }
`;

export const DayNumber = styled.div`
  color: var(--second-Text-Color);
  font-family: 'Inter Bold';
  font-size: 12px;
  line-height: 1.17;
  margin-top: 6px;
  padding: 4px 6px;

  &.current-date {
    color: #fff;
    border-radius: 8px;
    background: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
    margin-top: 4px;
  }
`;
