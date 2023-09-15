import PricingPlan from "./Pricing/pricing-plan";
import { useState } from "react";

function PricingSection() {
    
    const data = [
        {id: 1, title: "Basic Plan", price: "€ 100", des: [{title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: false}]},
        {id: 2, title: "Standard Plan", price: "€ 200", des: [{title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: false}]},
        {id: 3, title: "Premium Plan", price: "€ 300", des: [{title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}, {title: "Graphic Design", doesHave: true}]}
    ];


    const initialHoverState = data.map((datas) => datas.num === 3);
    const [hover, sethover] = useState(initialHoverState);


    function background(e) {
        sethover((event) => {
            const handleHover = [...event];
            handleHover[e] = true;
            return handleHover;
        });
    }

    function backgroundOut(e) {
        sethover((event) => {
            const handleHover = [...event];
            handleHover[e] = false;
            return handleHover;
        });
    }


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
                    <PricingPlan articles={data} background={background} backgroundOut={backgroundOut} hover={hover}/>
                </div>
            </div>    
        </section>
    );
}

export default PricingSection;