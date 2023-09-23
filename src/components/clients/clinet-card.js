import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faMinus } from "@fortawesome/free-solid-svg-icons";

function ClientCard({ clients }) {
  return (
    <>
      {clients.map((client, index) => (
        <div key={index} className="client-card">
          <div>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="2xl"
              style={{ color: "#112D4E" }}
            />
            <div className="client-des">
              <p>{client.des}</p>
              <span>
                <FontAwesomeIcon
                  icon={faMinus}
                  size="xl"
                  style={{ color: "#112D4E" }}
                />{" "}
                {client.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ClientCard;
