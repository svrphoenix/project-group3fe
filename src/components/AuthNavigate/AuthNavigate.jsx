import PropTypes from 'prop-types';
import { StyledNavigate } from './AuthNavigate.styled';

export const AuthNavigate = ({ path, text }) => {
    return <StyledNavigate to={path}>{text}</StyledNavigate>
}

AuthNavigate.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
