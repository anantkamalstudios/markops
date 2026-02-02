import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Brand1 from "../Components/Brand/Brand1";
import Choose1 from "../Components/Choose/Choose1";
import Counter1 from "../Components/Counter/Counter1";
import Faq1 from "../Components/Faq/Faq1";
import Feature1 from "../Components/Feature/Feature1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import HowWork from "../Components/HowWork/HowWork";
import Pricing1 from "../Components/Pricing/Pricing1";
import Testimonial from "../Components/Testimonial/Testimonial";
import {
  extractContentFromDescription,
  extractListItems,
  stripHtml,
} from "../utils/utils";
import useHome from "../hooks/useHome";
import CompetitorComparison from "../Components/CompetitorComparison/CompetitorComparison";
import { CircleLoader } from "react-spinners";
import FeatureTable from "../Components/FeatureTable/FeatureTable";
import Reveal from "../Components/Common/Reveal";

const Home = () => {
  const { data, loading, error } = useHome();

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <CircleLoader size={120} color="#3583e8ff" />
      </div>
    );
  if (error) return <div>Failed to load data. Please try again.</div>;
  if (!data?.heroes?.length) return <div>No data available</div>;

  const hero = data.heroes[0];
  const brand = data.Client;
  const choose1 = data.performance[0];
  const { content, featureList1, featureList2 } = extractContentFromDescription(
    choose1.description,
  );

  const counters = data.TrackModel;
  const faqData = data.FaqModel;
  const td = data.TestimonialModel;
  const pricing = data.plan;
  const blogs = data.blog;
  const howItWorkData = data.how_it_work;
  const featuresData = data.why_use_our_app;
  const competitor = data.competitor;

  return (
    <div>
      <Reveal>
        <HeroBanner1
          subtitle="<span>Hello!</span>Find Your Solution"
          title={hero.title}
          content={hero.paragraph}
          btnname={hero.button_1_text}
          btnurl={hero.button_1_url}
          btntwo={hero.button_2_text}
          btn2url={hero.button_2_url}
          img={`https://markopsadmin.markops.io/public/${hero.image}`}
          cusnumber="2,291"
          cuscontent="Trusted Users"
          rating="4.8/5"
          ratingcon="Average Rating"
        />
      </Reveal>
      <Reveal delay={0.2}>
        <Brand1 client={brand} />
      </Reveal>
      {data.about && data.about[0] && (
        <Reveal>
          <About1
            img1={`https://markopsadmin.markops.io/public/${data.about[0].image}`}
            img2="/assets/images/about/aboutThumb1_2.png"
            subtitle="About Our App"
            title={data.about[0].title}
            content={stripHtml(data.about[0].description)}
            FeatureList={extractListItems(data.about[0].description)}
            btnname="Discover More"
            btnurl=""
          />
        </Reveal>
      )}
      <Reveal>
        <HowWork howItWorkData={howItWorkData} />
      </Reveal>
      <Reveal>
        <Choose1
          subtitle="Performance Marketing Tool"
          img={choose1.image}
          title={choose1.title}
          content={content}
          FeatureList={featureList1}
          FeatureList2={featureList2}
        />
      </Reveal>
      <Reveal>
        <Feature1 featuresData={featuresData} />
      </Reveal>
      <Reveal>
        <Counter1 counters={counters}></Counter1>
      </Reveal>
      <Reveal>
        <Faq1 faqData={faqData} />
      </Reveal>
      <Reveal>
        <Testimonial td={td} />
      </Reveal>
      <Reveal>
        <Pricing1 pricing={pricing} />
      </Reveal>
      <Reveal>
        <CompetitorComparison competitor={competitor} />
      </Reveal>
      <Reveal>
        <FeatureTable />
      </Reveal>
      <Reveal>
        <Blog1 blogs={blogs} />
      </Reveal>
    </div>
  );
};

export default Home;
