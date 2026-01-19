import "../css/Certificates.css";
import { Link } from "react-router-dom";
import u1 from "../assets/nht/Certificates/U1.jpg";
import u2 from "../assets/nht/Certificates/U2.jpg";
import u3 from "../assets/nht/Certificates/U3.jpg";
import u4 from "../assets/nht/Certificates/U4.jpg";
import u5 from "../assets/nht/Certificates/U5.jpg";
import u6 from "../assets/nht/Certificates/U6.jpg";
import u7 from "../assets/nht/Certificates/U7.jpg";
import g1 from "../assets/nht/Certificates/G1.jpg";
import g2 from "../assets/nht/Certificates/G2.jpg";
import g3 from "../assets/nht/Certificates/G3.jpg";
import g4 from "../assets/nht/Certificates/G4.jpg";
import g5 from "../assets/nht/Certificates/G5.jpg";
import g6 from "../assets/nht/Certificates/G6.jpg";
import g7 from "../assets/nht/Certificates/G7.jpg";
import g8 from "../assets/nht/Certificates/G8.jpg";

const Certificates = () => {
  return (
    <>
      <div className="certificate ">
        <main>
          <div className="row text-center container-fluid py-lg-5 certBox mx-auto rounded-0">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1>Certificate Gallery</h1>
              <p className="lead text-body-secondary">
                A gallery of certificates serves as a visual timeline of my
                professional and personal growth. To showcase my achievements
                from <b>College</b> , <b>Bootcamp</b> and{" "}
                <b>Specialized Training</b> , this page demonstrates a
                continuous commitment to mastering new skills.
              </p>
            </div>
          </div>

          <div className="album py-5">
            <div className="container">
              <h1 className="py-3">College Diploma and Certificates</h1>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5 certBox">
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
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5 certBox">
                {/* Udemy SDLC */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img src={u3} alt="" height={225} />
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
                    <img src={u2} alt="" height={225} />
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
                {/* Udemy Power BI Desktop*/}
                <div className="col">
                  <div className="card shadow-sm">
                    <img src={u6} alt="" height={225} />
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
                    <img src={u5} alt="" height={225} />
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
                    <img src={u4} alt="" height={225} />
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
                    <img src={u1} alt="" height={225} />
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
                    <img src={u7} alt="" height={225} />
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
                    <img src={g7} alt="" height={225} />
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
                    <img src={g3} alt="" height={225} />
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
                    <img src={g8} alt="" height={225} />
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
                    <img src={g1} alt="" height={225} />
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
                    <img src={g4} alt="" height={225} />
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
                    <img src={Gg} alt="" height={225} />
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
                    <img src={g5} alt="" height={225} />
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
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5 certBox">
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
