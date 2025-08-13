import BreadCumb from "../Components/Common/BreadCumb";
import CompetitorComparison from "../Components/CompetitorComparison/CompetitorComparison";
import Loader from "../Components/Loader";
import Pricing1 from "../Components/Pricing/Pricing1";
import useHome from "../hooks/useHome";

const PricingPage = () => {
  const { data, loading, error } = useHome();

  if (loading) return <Loader />;
  if (error) return <div>Failed to load data. Please try again.</div>;
  if (!data?.heroes?.length) return <div>No data available</div>;

  const pricing = data.plan;
  const competitor = data.competitor;

  return (
    <div>
      <Pricing1 pricing={pricing} />
      <CompetitorComparison competitor={competitor} />
    </div>
  );
};

export default PricingPage;
