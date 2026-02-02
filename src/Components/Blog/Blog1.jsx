import { Link } from "react-router-dom";

const Blog1 = ({ blogs }) => {
  return (
    <section className="blog-section section-padding fix">
      <div className="container">
        <div className="blog-wrapper style1">
          <div className="section-title text-center mxw-685 mx-auto">
            <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
              Our Blog <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
            </div>
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">
              Recent Articles And Latest Blog
            </h2>
          </div>

          <div className="row gy-5">
            {blogs.map((blog, index) => (
              <div className="col-xl-4 col-md-6" key={blog.id}>
                <div
                  className="blog-card style1 wow fadeInUp"
                  data-wow-delay={`.${index + 2}s`}
                >
                  <div className="thumb">
                    <img
                      src={`https://markopsadmin.markops.io/public/${blog.image}`}
                      alt={blog.title}
                    />
                  </div>
                  <div className="body">
                    <div className="tag-meta">
                      <img
                        src="/assets/images/icon/FolderIcon.svg"
                        alt="icon"
                      />
                      {blog.tag}
                    </div>
                    <h3>
                      <Link to={`/blog/blog-details`} state={{ blog }}>
                        {blog.title}
                      </Link>
                    </h3>
                    <div className="blog-meta">
                      <div className="item child1">
                        <span className="icon">
                          <img
                            src="/assets/images/icon/userIcon.svg"
                            alt="icon"
                          />
                        </span>
                        <span className="text">By {blog.author}</span>
                      </div>
                      <div className="item">
                        <span className="icon">
                          <img
                            src="/assets/images/icon/calendar.svg"
                            alt="icon"
                          />
                        </span>
                        <span className="text">
                          {new Date(blog.published_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
             <Link to="/blog" className="theme-btn">Read More Resources</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog1;
