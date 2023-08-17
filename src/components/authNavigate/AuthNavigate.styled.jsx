import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import variables from '../../utils/variables';

const { secondMainColor, hoverBtnMAinColor, cubic } = variables;

export const StyledNavigate = styled(NavLink)`
    color: ${secondMainColor};
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter SemiBold;
    font-size: 12px;
    line-height: 1.16;
    text-decoration-line: underline;
    margin: 0 auto;
    cursor: pointer;
    display: block;
    text-align: center;
    margin-top: 18px;
    transition: color ${cubic},
    &:hover, &:focus {
        color: ${hoverBtnMAinColor};
        text-decoration-line: none;
    }
    @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    margin-top: 24px;
    }
`;
