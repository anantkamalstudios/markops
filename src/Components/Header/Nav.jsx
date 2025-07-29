import DropDown from "./DropDown";
import { Link } from "react-router-dom";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link to="/">Home</Link>
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
              <Link to="/google-about" onClick={() => setMobileToggle(false)}>
                Google AdSpy
              </Link>
            </li>
            <li>
              <Link to="/google-about" onClick={() => setMobileToggle(false)}>
                Linkedin AdSpy
              </Link>
            </li>
            <li>
              <Link to="/youtube-about" onClick={() => setMobileToggle(false)}>
                Youtube AdSpy
              </Link>
            </li>
            <li>
              <Link to="/x-about" onClick={() => setMobileToggle(false)}>
                X AdSpy
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="#" onClick={() => setMobileToggle(false)}>
          Features
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/google-page" onClick={() => setMobileToggle(false)}>
                Google Page
              </Link>
            </li>
            <li>
              <Link to="/facebook-page" onClick={() => setMobileToggle(false)}>
                Facebook Page
              </Link>
            </li>
            <li>
              <Link to="/instagram-page" onClick={() => setMobileToggle(false)}>
                Instagram Page
              </Link>
            </li>
            <li>
              <Link to="linkedin-page" onClick={() => setMobileToggle(false)}>
                LinkedIn Page
              </Link>
            </li>
            <li>
              <Link to="/youtube-page" onClick={() => setMobileToggle(false)}>
                Youtube Page
              </Link>
            </li>
            <li>
              <Link to="/x-page" onClick={() => setMobileToggle(false)}>
                X Page
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="">
        <Link to="/pricing" onClick={() => setMobileToggle(false)}>
          Pricing
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Resources
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/tutorials" onClick={() => setMobileToggle(false)}>
                Tutorials
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="markops-tools" onClick={() => setMobileToggle(false)}>
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
