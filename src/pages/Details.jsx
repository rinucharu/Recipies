import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Details = () => {

  const { id } = useParams();
  console.log(id);

  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let apiRes = await fetch(`https://dummyjson.com/recipes/${id}`);
    let data = await apiRes.json();
    setRecipies(data);
  };
  return (
   <>
   <section className='details py-5 mt-5'>

    <h2 className="text-center fs-1 fw-bold">Details</h2>
    <div className="conatainer">
       <Table striped bordered hover>
      <thead>
        <tr>
        <th>Image</th>
          <th> Name</th>
          <th>Incridients</th>
          <th>Instructions</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
         <td><img src={recipies.image} alt=""  className='img-fluid'/></td>
          <td>{recipies.name}</td>
          <td>{recipies.ingredients}</td>
          <td>{recipies.instructions}</td>
          
        </tr>
        
      </tbody>
    </Table>

    <div className="buttons d-flex align-items-center justify-content-center ">
      <button className="btn btn-dark me-3">Back to Home</button>
      <button className="btn btn-success">Try it</button>
    </div>
    </div>
   </section>
   </>
  )
}

export default Details