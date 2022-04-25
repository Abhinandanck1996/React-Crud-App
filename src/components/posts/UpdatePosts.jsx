import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../apis/Axios";

const UpdatePosts = () => {
  let { id } = useParams();
  let [title, setTitle] = useState("");
  let [details, setDetails] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate=useNavigate('/')

  useEffect(() => {
    let fetchPost = async () => {
      let { data } = await Axios.get(`/posts/${id}`);
      setTitle(data.title);
      setDetails(data.details);
    };
    fetchPost();
  }, [id]);
  let handleSubmit = async e => {
    e.preventDefault();
    let payload = { title, details };
    try {
      let { data } = await Axios.put(`/posts/${id}`, payload)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="authBlock" className="card">
      <article className="card-body col-4 mx-auto bg-light">
        <h2 className="text-center font-weight-bold text-dark text-uppercase">
          Update Post
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
            <button className="btn btn-success btn-block my-2">
              {loading === true ? "Loading" : "Update-Post"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UpdatePosts;
