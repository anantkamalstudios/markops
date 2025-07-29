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
import HomeShimmerEffect from "../Components/Shimmer/HomeShimmerEffect";

const Home = () => {
  const { data, loading, error } = useHome();

  if (loading)
    return (
      <div>
        <HomeShimmerEffect />
      </div>
    );
  if (error) return <div>Failed to load data. Please try again.</div>;
  if (!data?.heroes?.length) return <div>No data available</div>;

  const hero = data.heroes[0];
  const brand = data.Client;
  const choose1 = data.performance[0];
  const { content, featureList1, featureList2 } = extractContentFromDescription(
    choose1.description
  );

  const counters = data.TrackModel;
  const faqData = data.FaqModel;
  const td = data.TestimonialModel;
  const pricing = data.plan;
  const blogs = data.blog;
  const howItWorkData = data.how_it_work;
  const featuresData = data.why_use_our_app;

  return (
    <div>
      {/* <HeroBanner1
        subtitle="<span>Hello!</span>Find Your Solution"
        title="All-in-One Ad Intelligence Platform"
        content="Unlock competitor strategies with MarkOps — your ultimate ad library across 9+ platforms. Discover what’s working, track trends, and fuel your next winning campaign."
        subContent="
        ✔️ Cross-Platform Ad Library  
        ✔️ Real-Time Competitor Monitoring  
        ✔️ Deep Market & Audience Insights
        "
        btnname="Start Tracking Now"
        btnurl="/contact"
        btntwo="Explore Features"
        btn2url="/google-page"
        cusnumber="2,291"
        cuscontent="Trusted Users"
        rating="4.8/5"
        ratingcon="Average Rating"
        img="/assets/images/hero/hero_image.png"
      ></HeroBanner1>
       <Choose1
        subtitle="Performance Marketing Tool"
        title={choose1.title}
        content="Unlock the full potential of your campaigns with our data-driven marketing app. From lead generation to conversion tracking, our tool helps you scale faster, reach the right audience, and boost ROI — all in one platform."
        FeatureList={["User-Friendly Interface", "SEO-Optimized Campaigns"]}
        FeatureList2={["Cloud-Based Access", "Advanced Data Security"]}
        btnname="Download App"
        btnurl="/about"
      ></Choose1>
      <Feature2></Feature2> */}

      <HeroBanner1
        subtitle="<span>Hello!</span>Find Your Solution"
        title={hero.title}
        content={hero.paragraph}
        btnname={hero.button_1_text}
        btnurl={hero.button_1_url}
        btntwo={hero.button_2_text}
        btn2url={hero.button_2_url}
        img={`https://teal-sparrow-187679.hostingersite.com/public/${hero.image}`}
        cusnumber="2,291"
        cuscontent="Trusted Users"
        rating="4.8/5"
        ratingcon="Average Rating"
      />
      <Brand1 client={brand} />
      {data.about && data.about[0] && (
        <About1
          img1={`https://teal-sparrow-187679.hostingersite.com/public/${data.about[0].image}`}
          img2="/assets/images/about/aboutThumb1_2.png"
          subtitle="About Our App"
          title={data.about[0].title}
          content={stripHtml(data.about[0].description)}
          FeatureList={extractListItems(data.about[0].description)}
          btnname="Discover More"
          btnurl=""
        />
      )}
      <HowWork howItWorkData={howItWorkData} />
      <Choose1
        subtitle="Performance Marketing Tool"
        img={choose1.image}
        title={choose1.title}
        content={content}
        FeatureList={featureList1}
        FeatureList2={featureList2}
      />
      <Feature1 featuresData={featuresData} />
      <Counter1 counters={counters}></Counter1>
      <Faq1 faqData={faqData} />
      <Testimonial td={td} />
      <Pricing1 pricing={pricing} />
      <Blog1 blogs={blogs} />
    </div>
  );
};

export default Home;
