function PricingPlan({articles}) {
    return(
        <>
            {articles.map((article) => (
                <article key={article.id}>
                    <div>
                        <h2>{article.title}</h2>
                    </div>
                    <div className="pricing-plan-price">
                        <h2>{article.price}</h2>
                    </div>
                    <ul className="pricing-description">
                        <li>{article.des[0]}</li>
                        <li>{article.des[1]}</li>
                        <li>{article.des[2]}</li>
                        <li>{article.des[3]}</li>
                        <li>{article.des[4]}</li>
                        <li>{article.des[5]}</li>
                    </ul>
                    <button className="pricing-button">Vidi Više</button>
                </article>
            ))}
        </>
    );
}

export default PricingPlan;