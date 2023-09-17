import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ToTop() {
    return(
        <div>
            <a className="to-top" href='#top'><FontAwesomeIcon icon={faArrowUp} size="xl" style={{color: "#F9F7F7",}}/></a>
        </div>  
    );
}

export default ToTop;