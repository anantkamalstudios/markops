import BreadCumb from "../Components/Common/BreadCumb";
import CompetitorComparison from "../Components/CompetitorComparison/CompetitorComparison";
import Pricing1 from "../Components/Pricing/Pricing1";
import Pricing4 from "../Components/Pricing/Pricing4";
import useHome from "../hooks/useHome";

const PricingPage = () => {
  const { data, loading, error } = useHome();

  if (error) return <div>Failed to load data. Please try again.</div>;
  if (!data?.heroes?.length) return <div>No data available</div>;

  const pricing = data.plan;

  return (
    <div>
      <Pricing1 pricing={pricing} />
      <CompetitorComparison />
    </div>
  );
};

export default PricingPage;
