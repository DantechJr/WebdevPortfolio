import React from "react";
import "../css/About.css";
import Gradpic from "../assets/college/gradpic.jpg";
import kodego from "../assets/kodegologo.png";
import kodegoPic1 from "../assets/kodego/kodegoPic1.png";
import kodegoPic2 from "../assets/kodego/kodegoPic2.png";
import tesda from "../assets/tesda.png";
import tesdaPic from "../assets/tesda/tesdaPic1.jpg";
import tesdaPic2 from "../assets/tesda/tesdaPic2.jpg";
import accessLogo from "../assets/college/accessLogo.png";
import caseCover from "../assets/college/capstoneCaseCover.jpg";
import groupPic from "../assets/college/groupPic.png";
import capstonePassed from "../assets/college/capstonePassed.jpg";
import capstoneCD from "../assets/college/capstoneCD.jpg";

const About = () => {
  return (
    <>
      <div>
        {/* college */}
        <div className="container-fluid college border mb-3">
          <div className="row first p-4 m-4" style={{ borderRadius: "10px" }}>
            <div className="col-sm-12  img-fluid col-md-4">
              <img
                src={Gradpic}
                alt="my grad pic"
                className="gradpic"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <div className="row">
                <div className="col-12">
                  <h1 className="text-center my-3">Access Computer College</h1>
                </div>
                <div className="col-12"></div>
                <section>
                  <p>
                    I am a graduate of the bachelor of science in information
                    technology course at Access Computer College. where I
                    learned a lot of things connected to computer stuff such as
                    computer software, hardware, networks, and cyber security. I
                    also gained skills in photo and video editing and the
                    fundamentals of web development as part of the group that
                    happened to be awarded the best capstone in our 4th year
                    final capstone presentation as one of the developers of our
                    system.
                  </p>
                  <p>
                    <b>summary of a capstone project in college</b> <br />
                    It's an e-commerce website that sells vape juice for
                    e-cigarettes. The idea behind the project was to promote an
                    alternative to traditional tobacco, which we all know is
                    deadly. We are not just promoting alternatives but also
                    spreading awareness of the harmful effects of traditional
                    tobacco. We develop our system using a content management
                    system (CMS) under the WordPress platform. At first, we
                    wanted to create our system from scratch, but we didn't have
                    much time to spare because back then the restrictions were
                    very tight due to COVID-19, which also limited our
                    resources. However, despite all the difficulties, we still
                    managed to finish our system just in time, and the great
                    part is that we defended our capstone project with flying
                    colors and were awarded as the <b>
                      Best Capstone Project
                    </b>{" "}
                    in our batch.
                  </p>
                </section>
              </div>
              {/* college carousel */}
              <div className="col-12 mt-4">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide mx-auto my-2"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {/* 1st carousel */}
                    <div className="carousel-item active">
                      <img
                        src={accessLogo}
                        className="d-block mx-auto"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
                      <h5 className="text-center">Access Computer College</h5>
                      <p className="text-center">
                        Bachelor of Science in Information Technology
                      </p>
                    </div>
                    {/* 2nd carousel */}
                    <div className="carousel-item">
                      <img
                        src={groupPic}
                        className="d-block mx-auto w-100"
                        alt="..."
                        style={{
                          objectFit: "cover",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p> */}
                      </div>
                    </div>
                    {/* 3rd carousel */}
                    <div className="carousel-item">
                      <img
                        src={caseCover}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "fill",

                          height: "330px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p> */}
                      </div>
                    </div>
                    {/* 4th carousel */}
                    <div className="carousel-item">
                      <img
                        src={capstonePassed}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",

                          height: "350px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p> */}
                      </div>
                    </div>
                    {/* 5th carousel */}
                    <div className="carousel-item">
                      <img
                        src={capstoneCD}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          height: "350px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p> */}
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kodego */}
        <div className="container-fluid kodego border my-3">
          <div className="row first p-4 m-4" style={{ borderRadius: "10px" }}>
            <div className="col-sm-12 col-md-4">
              <img
                src={kodego}
                alt="my grad pic"
                className="gradpic"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <h1 className="text-center my-3">
                KodeGo (<cite>Code-go</cite>)
              </h1>
              <section>
                <p>
                  Kodego is a bootcamp platform that offers intensive tech
                  training remotely, such as UX Design, mobile app development,
                  WordPress Development, general virtual assistant, and lastly,
                  full-stack Web Development. I took the course in about 3
                  months. They teach us the fundamentals of web development,
                  which our instructor called the "holy trinity" of web
                  development, and they are
                  <b> Hyper Text Markup Language (HTML)</b>,
                  <b> Cascading Style Sheet (CSS)</b> , and <b>Javascript</b>.
                </p>
                <p>
                  As a Full-stack developer, they teach us how to develop a
                  front-end and back-end system using different tech stacks.
                  After 3 months, we manage to create different mini projects
                  and a capstone project, which is a group project and we must
                  pass it to be able to proceed with the application process.
                  which I did with the help of my amazing group mates!
                </p>
                <p>
                  The bootcamp didn't just teach us how to develop a web app; it
                  also gave us the experience on how to collaborate with a team
                  to finish a project, which is the most important thing we
                  acquired in the bootcamp.
                </p>
              </section>
              {/* kodego carousel */}
              <div className="col-12 mt-4">
                <div
                  id="carouselCaptions2"
                  className="carousel slide mx-auto my-2"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {/* 1st carousel */}
                    <div className="carousel-item active">
                      <img
                        src={kodego}
                        className="d-block mx-auto"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
                      <h5 className="text-center">Kodego Bootcamp</h5>
                      <p className="text-center">Full-stack Web Developer</p>
                    </div>
                    {/* 2nd carousel */}
                    <div className="carousel-item">
                      <img
                        src={kodegoPic1}
                        className="d-block mx-auto w-100"
                        alt="..."
                        style={{
                          objectFit: "cover",

                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p> */}
                      </div>
                    </div>
                    {/* 3rd carousel */}
                    <div className="carousel-item">
                      <img
                        src={kodegoPic2}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "cover",

                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p> */}
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselCaptions2"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselCaptions2"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tesda */}
        <div className="container-fluid tesda border mt-3">
          <div className="row first p-4 m-4" style={{ borderRadius: "10px" }}>
            <div className="colsm-12 col-md-4">
              <img
                src={tesda}
                alt="my grad pic"
                className="gradpic"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <h1 className="text-center my-3">TESDA NCII</h1>
              <section>
                <p>
                  <b> Computer Systems Servicing NC II</b> is one of the courses
                  offered by the Technical Education and Skills Development
                  Authority (TESDA). To be able to acquire the certificate, one
                  must possess the skills and knowledge necessary to install and
                  configure computers, set up computer networks and servers, and
                  maintain and repair computer systems and networks.
                </p>
                <p>
                  Computer servicing is the process of maintaining and repairing
                  computers and computer peripherals. It can involve anything
                  from malware removal and software updates to hardware repairs
                  and troubleshooting.
                </p>
                <p>
                  The assessment ran for about four hours or so. and it was held
                  at one of the campuses of our school in Pasay City. The
                  assessment was facilitated by a professional licensed
                  instructor from TESDA. Luckily for me, I was able to
                  <b> pass</b> the computer system servicing exam;
                  unfortunately, there are some who didn't. All in all, it was a
                  <b> great experience</b> and a fulfilling achievement for me,
                  even though it was a nerve-wracking experience to begin with.
                </p>
              </section>
              {/* kodego carousel */}
              <div className="col-12 mt-4">
                <div
                  id="carouselCaptions3"
                  className="carousel slide mx-auto my-2"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {/* 1st carousel */}
                    <div className="carousel-item active">
                      <img
                        src={tesda}
                        className="d-block mx-auto"
                        alt="..."
                        style={{
                          objectFit: "cover",

                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
                      <h5 className="text-center">Tesda NCII</h5>
                      <p className="text-center">Computer System Servicing</p>
                    </div>
                    {/* 2nd carousel */}
                    <div className="carousel-item">
                      <img
                        src={tesdaPic}
                        className="d-block mx-auto w-50"
                        alt="..."
                        style={{
                          objectFit: "cover",

                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p> */}
                      </div>
                    </div>
                    {/* 3rd carousel */}
                    <div className="carousel-item">
                      <img
                        src={tesdaPic2}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "cover",

                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p> */}
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselCaptions3"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselCaptions3"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
