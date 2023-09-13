import PricingPlan from "./Pricing/pricing-plan";

function PricingSection() {

    const data = [
        {id: 1, title: "Basic Plan", des: ["Graphic Design", "Web Design", "UI/UX", "HTML/CSS", "SEO Marketing", "Business Analysis"]},
        {id: 2, title: "Standard Plan", des: ["Graphic Design", "Web Design", "UI/UX", "HTML/CSS", "SEO Marketing", "Business Analysis"]},
        {id: 3, title: "Premium Plan", des: ["Graphic Design", "Web Design", "UI/UX", "HTML/CSS", "SEO Marketing", "Business Analysis"]}
    ];

    return(
        <div className="pricing-section">
            <PricingPlan articles={data}/>
        </div>
    );
}

export default PricingSection;