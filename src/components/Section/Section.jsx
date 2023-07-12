import PropTypes from 'prop-types';
import { SectionStyled } from "./SectionStyled";

const Section = ({title, children}) => {
return (
    <SectionStyled>
        {<h2>{title}</h2>}
        {children}
    </SectionStyled>
)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;