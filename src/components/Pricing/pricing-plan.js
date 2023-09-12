function PricingPlan({articles}) {
    return(
        <>
            {articles.map((article) => {
                <article>
                    <div>
                        <h2>{article.title}</h2>
                    </div>
                    <div className="pricing-plan-price">
                        <h2>{article.price}</h2>
                    </div>
                    <ul>
                        <li>{article.des[0]}</li>
                        <li>{article.des[1]}</li>
                        <li>{article.des[2]}</li>
                        <li>{article.des[3]}</li>
                        <li>{article.des[4]}</li>
                        <li>{article.des[5]}</li>
                    </ul>
                    <button>Vidi Više</button>
                </article>
            })}
        </>
    );
}

export default PricingPlan;