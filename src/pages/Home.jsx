import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let apiRes = await fetch("https://dummyjson.com/recipes");
    let data = await apiRes.json();
    setRecipies(data.recipes);
    console.log(data.recipes);
  };
  return (
    <>
      <section className="home d-flex justify-content-start h-100 align-items-center ">
        <div className="des ms-5">
          <h2> Declious Homemade Recipies </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis
            magni facilis quas error repudiandae at sapiente ipsum accusamus
            atque alias velit, quidem commodi totam nostrum cupiditate, hic,
            natus tenetur.
          </p>

       <a href="#res" className="btn btn-success p-3">See Recipies</a>
        </div>
      </section>

      <section className="res py-5 bg-light" id="res">
        <h2 className="text-center fs-1 fw-bold">Best Recipies</h2>

      <Container className="mt-4 mb-4">
        <Row>
          {recipies.map((eachProduct) => (
            <Col key={eachProduct.id} lg={3} md={4} sm={6} className="p-4">
              <Card style={{ width: "18rem" }} className="shadow">
                <Card.Img
                  variant="top"
                  src={eachProduct.image}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{eachProduct.name}</Card.Title>
                  <Card.Text>{eachProduct.rating}</Card.Text>
                  <Card.Text>{eachProduct.tags}</Card.Text>
                  <Card.Text>{eachProduct.cuisine}</Card.Text>
                  <Link to={`/details/${eachProduct.id}`} className="w-100 btn btn-success">
                    How to cook
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </section>
    </>
  );
};

export default Home;
