import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./Home";

const About = () => {
  return (
    <>
      <section className="py-5 mt-5">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col-lg-6 ms-2">
              <div className="ab-img">
                <img
                  style={{ width: "100%" }}
                  src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="ab-title">
                <h2>About Us</h2>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  voluptates necessitatibus tempore ut sapiente earum optio
                  rerum vitae. Voluptatibus esse corrupti cum alias. Doloribus
                  nostrum dignissimos, odio sapiente sed perspiciatis?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia numquam eveniet neque iusto tempore ea dolores
                  doloremque repudiandae molestiae illo, vel expedita enim eos
                  excepturi error! Sed sapiente alias magni?
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique illo dicta qui, repellat quas adipisci facere
                  suscipit. Sapiente voluptas, accusamus adipisci neque velit
                  repellat quisquam debitis esse praesentium molestiae nulla!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit aliquam repudiandae iure amet. Rerum impedit provident
                  exercitationem dolores non, quos ut dignissimos rem nihil
                  consequuntur labore repellendus enim eius natus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
