
import React ,{useState} from 'react';
export default function Blog(props) {
  return (
    <>
 

     <img src="hero2.jpeg" className="img-fluid" width="100%"alt="" />


      <div className="  container" style={{color:props.mode=== 'dark'?'white': '#042743' }}>
        <h1>Blogs by Adarsh-The Legend</h1>
        <div className="blogitem">
          <h2>Learn javascript-in fun way!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus expedita amet blanditiis autem maiores dignissimos
            commodi fugiat animi! Recusandae eius beatae quaerat qui provident
            rem laboriosam incidunt minus ex. Praesentium ipsam natus molestiae!
          </p>
          <button className="btn btn-sm">Read More</button>
        </div>
        <div className="blogitem">
          <h2>Learn javascript-in fun way!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus expedita amet blanditiis autem maiores dignissimos
            commodi fugiat animi! Recusandae eius beatae quaerat qui provident
            rem laboriosam incidunt minus ex. Praesentium ipsam natus molestiae!
          </p>
          <button className="btn btn-sm">Read More</button>
        </div>
        <div className="blogitem">
          <h2>Learn javascript-in fun way!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus expedita amet blanditiis autem maiores dignissimos
            commodi fugiat animi! Recusandae eius beatae quaerat qui provident
            rem laboriosam incidunt minus ex. Praesentium ipsam natus molestiae!
          </p>
          <button className="btn btn-sm">Read More</button>
        </div>
      </div>
    </>
  );
}
