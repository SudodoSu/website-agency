import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

function PricingPlan({articles, background, backgroundOut, hover}) {
    return(
        <>
            {articles.map((article) => (
                <article key={article.num} className={`pricing-article ${(hover[article.id]) ? "growArticle" : ""}`} onMouseEnter={() => background(article.id)} onMouseLeave={() => backgroundOut(article.id)}>
                    <div className="plan-title">
                        <h2>{article.title}</h2>
                    </div>
                    <div className="pricing-plan-price">
                        <h2>{article.price}</h2>
                    </div>
                    <ul className="pricing-description">
                        <li>{(article.des[0].doesHave) ? <span><FontAwesomeIcon icon={faCheck} style={{color: "#112d4e",}} /></span> : <span><FontAwesomeIcon icon={faX} style={{color: "#112d4e",}} /></span>}{article.des[0].title}</li>
                        <li>{(article.des[1].doesHave) ? <span><FontAwesomeIcon icon={faCheck} style={{color: "#112d4e",}} /></span> : <span><FontAwesomeIcon icon={faX} style={{color: "#112d4e",}} /></span>}{article.des[1].title}</li>
                        <li>{(article.des[2].doesHave) ? <span><FontAwesomeIcon icon={faCheck} style={{color: "#112d4e",}} /></span> : <span><FontAwesomeIcon icon={faX} style={{color: "#112d4e",}} /></span>}{article.des[2].title}</li>
                        <li>{(article.des[3].doesHave) ? <span><FontAwesomeIcon icon={faCheck} style={{color: "#112d4e",}} /></span> : <span><FontAwesomeIcon icon={faX} style={{color: "#112d4e",}} /></span>}{article.des[3].title}</li>
                    </ul>
                    <button className="pricing-button">Vidi Više</button>
                </article>
            ))}
        </>
    );
}

export default PricingPlan;