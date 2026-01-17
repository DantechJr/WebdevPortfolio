import "../css/Certificates.css";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <>
      <div className="certificate ">
        <main>
          <div className="row text-center container-fluid py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Certificate Gallery</h1>
              <p className="lead text-body-secondary">
                A gallery of certificates serves as a visual timeline of my
                professional and personal growth. To showcase my achievements
                from college bootcamp and specialized training, this page
                demonstrates a continuous commitment to mastering new skills.
              </p>
            </div>
          </div>

          <div className="album py-5">
            <div className="container">
              <h1 className="py-3">College Diploma and Certificates</h1>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
                {/* college diploma */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          College Diploma Information Technology
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* tesda certificate */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Tesda NCII Certificate Computer System Servicing
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* kodego certificate */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Kodego Bootcamp Certificate
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="py-3">Udemy and Coursera Certificates</h1>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
                {/* Udemy SDLC */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Udemy SDLC
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Udemy SQL */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Udemy SQL
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Udemy Power BI */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Udemy Power BI
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Udemy Power BI UI/UX */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Udemy Power BI UI/UX
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Udemy Python */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Udemy Python
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Udemy Generative AI */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Udemy Generative AI
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Udemy Chat GPT */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Udemy Chat GPT
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Coursera AI Essentials */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Coursera AI Essentials
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Coursera Cybersecurity */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Coursera Cybersecurity
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Coursera IT Support */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Coursera IT Support
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Coursera Data Analytics */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Coursera Data Analytics
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Coursera Digital Marketing & E-commerce */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Coursera Digital Marketing & E-commerce
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Coursera Project Management */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Coursera Project Management
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Coursera User Experience UX Design */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Coursera User Experience UX Design
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="py-3">Skills to Succeed Academy</h1>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
                {/* skills to succeed certificate */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Skills to Succeed Academy
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* completed module */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-body-secondary">
                          Completed Module
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Certificates;
