import React from "react";
import "../css/About.css";
import Gradpic from "../assets/gradpic.jpg";
import kodego from "../assets/kodegologo.png";
import tesda from "../assets/tesda.png";

const About = () => {
  return (
    <>
      <div>
        {/* college */}
        <div className="container-fluid college border my-3">
          <div className="row first p-5 m-5" style={{ borderRadius: "10px" }}>
            <div className="col-sm-12  img-fluid col-md-4">
              <img
                src={Gradpic}
                alt="my grad pic"
                className="gradpic"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, iure! Magnam quod reiciendis nostrum libero
                  assumenda earum itaque autem, tenetur voluptatum. Officia,
                  laboriosam illo ratione aut aperiam reprehenderit accusantium
                  praesentium?
                </p>
              </section>
            </div>
          </div>
        </div>
        {/* Kodego */}
        <div className="container-fluid kodego border my-3">
          <div className="row first p-5 m-5" style={{ borderRadius: "10px" }}>
            <div className="col-sm-12 col-md-4">
              <img
                src={kodego}
                alt="my grad pic"
                className="gradpic"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, iure! Magnam quod reiciendis nostrum libero
                  assumenda earum itaque autem, tenetur voluptatum. Officia,
                  laboriosam illo ratione aut aperiam reprehenderit accusantium
                  praesentium?
                </p>
              </section>
            </div>
          </div>
        </div>
        {/* Tesda */}
        <div className="container-fluid tesda border my-3">
          <div className="row first p-5 m-5" style={{ borderRadius: "10px" }}>
            <div className="colsm-12 col-md-4">
              <img
                src={tesda}
                alt="my grad pic"
                className="gradpic"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, iure! Magnam quod reiciendis nostrum libero
                  assumenda earum itaque autem, tenetur voluptatum. Officia,
                  laboriosam illo ratione aut aperiam reprehenderit accusantium
                  praesentium?
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
