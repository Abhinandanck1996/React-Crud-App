import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "../../apis/Axios";

const Posts = () => {
  let [state, setState] = useState(null);
  let [loading, setLoading] = useState(false);

  let deletePost = async id => {
    await Axios.delete(`/posts/${id}`)
    window.location.assign('/')
  }
  
  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await Axios.get("/posts");
        setLoading(true);
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className="container my-4">
      <table className="table table-bordered table-hovered">
        <thead className="thead-dark text-capitalize">
          <tr>
            <th>title</th>
            <th>details</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {state === null
            ? "loading"
            : state.map(posts => {
                return (
                  <tr key={posts.id}>
                    <td>{posts.title}</td>
                    <td>{posts.details}</td>
                    <td>
                      <Link
                        to={`/update-post/${posts.id}`}
                        className="btn btn-success btn-sm"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      {" "}
                     
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deletePost(posts.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
