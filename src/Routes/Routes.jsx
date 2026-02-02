import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import Home from "../Pages/Home";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import Layout4 from "../Layout/Layout4";
import ServicePage from "../Pages/ServicePage";
import ServiceDetailPage from "../Pages/ServiceDetailPage";
import PricingPage from "../Pages/PricingPage";
import ProjectPage1 from "../Pages/ProjectPage1";
import ProjectPage2 from "../Pages/ProjectPage2";
import ProjectDetailPage from "../Pages/ProjectDetailPage";
import TeamPage from "../Pages/TeamPage";
import TeamDetailPage from "../Pages/TeamDetailPage";
import ContactPage from "../Pages/ContactPage";
import BlogPage from "../Pages/BlogPage";
import BlogStandardPage from "../Pages/BlogStandardPage";
import BlogLeftPage from "../Pages/BlogLeftPage";
import BlogDetaillsPage from "../Pages/BlogDetaillsPage";
import FaqPage from "../Pages/FaqPage";
import FacebookAboutPage from "../Pages/FacebookAboutPage";
import InstagramAboutPage from "../Pages/InstagramAboutPage";
import TikTokAboutUs from "../Pages/TikTokAboutUs";
import YoutubeAboutUs from "../Pages/YoutubeAboutUs";
import XAboutUs from "../Pages/XAboutUs";
import FacebookPage from "../Pages/FacebookPage";
import TermCondition from "../Components/Legals/TermCondition";
import Privacy from "../Components/Legals/Privacy";
import Refund from "../Components/Legals/Refund";
import LinkedinPage from "../Pages/LinkedinPage";
import YoutubePage from "../Pages/YoutubePage";
import GooglePage from "../Pages/GooglePage";
import InstagramPage from "../Pages/InstagramPage";
import XPage from "../Pages/XPage";
import GoogleAboutUs from "../Pages/GoogleAboutUs";
import LinkedinAboutUs from "../Pages/LinkedinAboutUs";
import TutorialPage from "../Pages/TutorialPage";
import ToolDetails from "../Components/ToolDetails/ToolDetails";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import NotFoundPage from "../Pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout4></Layout4>,
    children: [
      // AdSpy
      {
        path: "/facebook-about",
        element: <FacebookAboutPage></FacebookAboutPage>,
      },
      {
        path: "/google-about",
        element: <GoogleAboutUs></GoogleAboutUs>,
      },
      {
        path: "/linkedin-about",
        element: <LinkedinAboutUs></LinkedinAboutUs>,
      },
      {
        path: "/instagram-about",
        element: <InstagramAboutPage></InstagramAboutPage>,
      },
      {
        path: "/youtube-about",
        element: <YoutubeAboutUs></YoutubeAboutUs>,
      },
      {
        path: "/x-about",
        element: <XAboutUs></XAboutUs>,
      },
      // Features
      {
        path: "/facebook-page",
        element: <FacebookPage></FacebookPage>,
      },
      {
        path: "/google-page",
        element: <GooglePage></GooglePage>,
      },
      {
        path: "/instagram-page",
        element: <InstagramPage></InstagramPage>,
      },
      {
        path: "/linkedin-page",
        element: <LinkedinPage></LinkedinPage>,
      },
      {
        path: "/youtube-page",
        element: <YoutubePage></YoutubePage>,
      },
      {
        path: "/x-page",
        element: <XPage></XPage>,
      },
      {
        path: "/service",
        element: <ServicePage></ServicePage>,
      },
      {
        path: "/service/service-details",
        element: <ServiceDetailPage></ServiceDetailPage>,
      },
      {
        path: "/pricing",
        element: <PricingPage></PricingPage>,
      },
      {
        path: "/project",
        element: <ProjectPage1></ProjectPage1>,
      },
      {
        path: "/project2",
        element: <ProjectPage2></ProjectPage2>,
      },
      {
        path: "/project/project-details",
        element: <ProjectDetailPage></ProjectDetailPage>,
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/team/team-details",
        element: <TeamDetailPage></TeamDetailPage>,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
      {
        path: "/about-us",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/terms-conditions",
        element: <TermCondition></TermCondition>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/refund",
        element: <Refund></Refund>,
      },
      {
        path: "/tutorials",
        element: <TutorialPage></TutorialPage>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/blogs",
        element: <BlogStandardPage></BlogStandardPage>,
      },
      {
        path: "/markops-tools",
        element: <ToolDetails></ToolDetails>,
      },
      // {
      //   path: "/blog-sidebar",
      //   element: <BlogStandardPage></BlogStandardPage>,
      // },
      {
        path: "/blog-left-sidebar",
        element: <BlogLeftPage></BlogLeftPage>,
      },
      {
        path: "/blog/blog-details",
        element: <BlogDetaillsPage></BlogDetaillsPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "home2",
    element: <Layout2></Layout2>,
    children: [
      {
        index: true,
        element: <Home2></Home2>,
      },
    ],
  },
  {
    path: "home3",
    element: <Layout3></Layout3>,
    children: [
      {
        index: true,
        element: <Home3></Home3>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
