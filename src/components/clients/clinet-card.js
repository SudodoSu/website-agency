import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faMinus } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

function ClientCard({clients}) {
    return(
        <>
            {clients.map((client, index) => (
                <motion.div key={index} className="client-card">
                    <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#DBE2EF",}}/>
                    <div>
                        <p>{client.des}</p>
                        <span><FontAwesomeIcon icon={faMinus} style={{color: "#DBE2EF",}}/> {client.name}</span>
                    </div>
                </motion.div>
            ))}
        </>
    );
}

export default ClientCard;