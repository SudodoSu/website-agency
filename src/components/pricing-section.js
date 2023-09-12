import PricingPlan from "./Pricing/pricing-plan";

function PricingSection() {

    const data = [
        {id: 1, title: "Basic", dec: ["Graphic Design", "Web Design", "UI/UX", "HTML/CSS", "SEO Marketing", "Business Analysis"]},
        {id: 2, title: "Basic", dec: ["Graphic Design", "Web Design", "UI/UX", "HTML/CSS", "SEO Marketing", "Business Analysis"]},
        {id: 3, title: "Basic", dec: ["Graphic Design", "Web Design", "UI/UX", "HTML/CSS", "SEO Marketing", "Business Analysis"]}
    ];

    return(
        <>
            <PricingPlan articles={data}/>
        </>
    );
}

export default PricingSection;