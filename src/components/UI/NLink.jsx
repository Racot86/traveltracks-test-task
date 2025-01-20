import {theme} from "@theme/theme.js";
import {NavLink, useLocation} from "react-router-dom";
import {useState} from "react";
import PropTypes from "prop-types";

const NLink = ({text, to = '/'}) => {
    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);

    const linkActivityHandler = () => {
        if (to.length > 1 && location.pathname.includes(to)) {
            return theme.button.hover
        } else {
            if (to.length === 1 && location.pathname.length === 1) {
                return theme.button.hover
            } else {
                if (isHovered) {
                    return theme.button.main
                } else {
                    return theme.text;
                }
            }
        }
    }

    return (
        <NavLink
            style={{
                ...theme.navLink,
                color: linkActivityHandler(),

            }}
            to={to}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >{text}</NavLink>
    )
}

NLink.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string,
}

export default NLink;