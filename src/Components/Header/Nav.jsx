import DropDown from "./DropDown";
import { Link } from "react-router-dom";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link to="/">Home</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown> */}
      </li>
      <li className="menu-item-has-children">
        <Link to="#">AdSpy</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/facebook-about" onClick={() => setMobileToggle(false)}>
                Facebook AdSpy
              </Link>
            </li>
            <li>
              <Link
                to="/instagram-about"
                onClick={() => setMobileToggle(false)}
              >
                Instagram AdSpy
              </Link>
            </li>
            <li>
              <Link to="/tiktok-about" onClick={() => setMobileToggle(false)}>
                TikTok AdSpy
              </Link>
            </li>
            <li>
              <Link to="/youtube-about" onClick={() => setMobileToggle(false)}>
                Youtube AdSpy
              </Link>
            </li>
            <li>
              <Link to="/x-about" onClick={() => setMobileToggle(false)}>
                Twitter AdSpy
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/project" onClick={() => setMobileToggle(false)}>
          Features
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                Facebook Page
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
                Instagram Page
              </Link>
            </li>
            <li>
              <Link
                to="/team/team-details"
                onClick={() => setMobileToggle(false)}
              >
                TikTok Page
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setMobileToggle(false)}>
                Youtube Page
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
                Twitter Page
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Pricing
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/service/service-details"
                onClick={() => setMobileToggle(false)}
              >
                Service Details
              </Link>
            </li>
          </ul>
        </DropDown> */}
      </li>
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Resources
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Tutorials
              </Link>
            </li>
            <li>
              <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            {/* <li>
              <Link
                to="/blog-left-sidebar"
                onClick={() => setMobileToggle(false)}
              >
                Blog Left Sidebar
              </Link>
            </li> */}
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Tool
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
