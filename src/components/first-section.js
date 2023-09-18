import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function FristSection({title}) {
    return(
        <section className="first-section">
            <div className="first-section-content">
                <h1>{title}</h1>
                <div className="first-section-path">
                        <h4>Home</h4>
                        <FontAwesomeIcon icon={faChevronRight} style={{color: "#F9F7F7",}} />
                        <h4>{title}</h4>
                </div>
            </div>
        </section>  
    );
}

export default FristSection;