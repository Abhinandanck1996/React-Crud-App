import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Axios from "../../apis/Axios";

const CreatePost = () => {
  let [title, setTitle] = useState('')
  let [details, setDetails] = useState('')
  let [loading, setLoading] = useState(false)
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault()
    try {
      let payload = { title, details };
      Axios.post("/posts", payload)
      navigate("/")
   
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <section id="authBlock" className="card">

      <article className="card-body col-4 mx-auto bg-light">
        <h2 className="text-center font-weight-bold text-dark text-uppercase">
          Create Post
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="" className="text-capitalize">
              title
            </label>
            <input
              type="text"
              className="form-control"
              value={title}
              required
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="details" className="text-capitalize">
              details
            </label>
            <textarea
              name=""
              id="details"
              cols="30"
              rows="10"
              className="form-control"
              value={details}
              required
              onChange={e => setDetails(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <button className="btn btn-success btn-block my-2">{ loading===true?"Loading":"Create-Post"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePost;
