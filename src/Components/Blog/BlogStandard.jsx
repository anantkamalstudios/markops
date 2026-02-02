import { Link } from "react-router-dom";
import useHome from "../../hooks/useHome";
import { stripHtml } from "../../utils/utils";
import { CircleLoader } from "react-spinners";

const BlogStandard = () => {
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
  if (error) return <div>Failed to load blogs.</div>;
  if (!data?.blog?.length) return <div>No blogs available.</div>;

  const blogs = data.blog;
  return (
    <section className="news-standard fix section-padding">
      <div className="container">
        <div className="d-flex justify-content-center legal-heading">
          <h1>Blog Standards</h1>
        </div>
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="news-standard-wrapper">
              {blogs.map((blog, index) => {
                const date = new Date(blog.published_at);
                const day = date.getDate();
                const month = date.toLocaleString("default", {
                  month: "short",
                });

                return (
                  <div
                    key={blog.id}
                    className="news-standard-items wow fadeInUp"
                    data-wow-delay={`.${index + 2}s`}
                  >
                    <div className="news-thumb">
                      <img
                        src={`https://markopsadmin.markops.io/public/${blog.image}`}
                        alt={blog.title}
                      />
                      <div className="post-date">
                        <h3>
                          {day} <br />
                          <span>{month}</span>
                        </h3>
                      </div>
                    </div>

                    <div className="news-content">
                      <ul>
                        <li>
                          <i className="bi bi-person"></i> By {blog.author}
                        </li>
                      </ul>
                      <h3>
                        <Link to={`/blog/blog-details`} state={{ blog }}>
                          {blog.title}
                        </Link>
                      </h3>
                      <p>
                        {/* You can create a helper to extract text from HTML or just slice the title/description safely */}
                        {stripHtml(blog.description).slice(0, 180)}...
                      </p>
                      <Link
                        to="#"
                        // to={`/blog/blog-details/${blog.id}`}
                        state={{ blog }}
                        className="theme-btn mt-4"
                      >
                        Read More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="main-sidebar">
              <div
                className="single-sidebar-widget wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="wid-title">
                  <h3>Search</h3>
                </div>
                <div className="search-widget">
                  <form action="#">
                    <input type="text" placeholder="Search here" />
                    <button type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div
                className="single-sidebar-widget wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="wid-title">
                  <h3>Categories</h3>
                </div>
                <div className="news-widget-categories">
                  <ul>
                    <li>
                      <Link to="#">
                        Database Security <span>(08)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        IT Consultancy <span>(11)</span>
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="#">
                        App Development <span>(12)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        UI/UX Design <span>(18)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Cyber Security <span>(07)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="single-sidebar-widget wow fadeInUp"
                data-wow-delay=".6s"
              >
                {/* <div className="wid-title">
                  <h3>Recent Post</h3>
                </div> */}
                <div className="recent-post-area">
                  <div className="recent-items">
                    <div className="recent-thumb">
                      {/* <img
                        src="/assets/images/blog/blogRecentThumb1_1.jpg"
                        alt="img"
                      /> */}
                      <img
                        src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=80&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8fDA%3D"
                        alt="img"
                      />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <img
                            src="/assets/images/icon/calendarIcon.svg"
                            alt="icon"
                          />
                          18 Dec, 2024
                        </li>
                      </ul>
                      <h6>
                        <Link to="#">
                          Keep Your Business Safe & <br />
                          Endure High Availability
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      {/* <img
                        src="/assets/images/blog/blogRecentThumb1_2.jpg"
                        alt="img"
                      /> */}
                      <img
                        src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=80&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8fDA%3D"
                        alt="img"
                      />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <img
                            src="/assets/images/icon/calendarIcon.svg"
                            alt="icon"
                          />
                          18 Dec, 2024
                        </li>
                      </ul>
                      <h6>
                        <Link to="#">
                          Tacking the Changes of <br />
                          Retail Industry
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      {/* <img
                        src="/assets/images/blog/blogRecentThumb1_3.jpg"
                        alt="img"
                      /> */}
                      <img
                        src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=80&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8fDA%3D"
                        alt="img"
                      />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <img
                            src="/assets/images/icon/calendarIcon.svg"
                            alt="icon"
                          />
                          18 Dec, 2024
                        </li>
                      </ul>
                      <h6>
                        <Link to="#">
                          What’s the Holding Back <br />
                          the It Solution
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-sidebar-widget wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="wid-title">
                  <h3>Tags</h3>
                </div>
                <div className="news-widget-categories">
                  <div className="tagcloud">
                    <a href="#">Security</a>
                    <a href="#">Business</a>
                    <a href="#">Digital</a>
                    <a href="#">Technology</a>
                    <a href="#">Change</a>
                    <a href="#">Video</a>
                    <a href="#">UI/UX Desing</a>
                    <a href="#">Startup</a>
                    <a href="#">Services</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStandard;
