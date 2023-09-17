import PricingPlan from "./Pricing/pricing-plan";
import { useState } from "react";

function PricingSection() {
    
    const data = [
        {id: 1, title: "Basic Plan", price: "€ 100", des: [{title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: false}]},
        {id: 2, title: "Standard Plan", price: "€ 200", des: [{title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: false}]},
        {id: 3, title: "Premium Plan", price: "€ 300", des: [{title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}]}
    ];

    const [hover, sethover] = useState(2);


    function background(e) {
        sethover(e);
    }

    const isHovered = (e) => e === hover;
    
    return(
        <section className="pricing">
            <div className="max-width">
                <div className="pricing-title">
                    <h1>Izaberite Svoj Plan</h1>
                    <div className="section-two-line"></div>
                    <p>
                    Bacimo se na posao i krenimo dizajnirati tvoju Online prisutnost!
                    </p>
                </div>
                <div className="pricing-section">
                    <PricingPlan articles={data} background={background} hover={isHovered}/>
                </div>
            </div>    
        </section>
    );
}

export default PricingSection;