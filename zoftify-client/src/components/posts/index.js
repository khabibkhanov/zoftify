import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Table } from "reactstrap";

const Posts = () => {
  const [ postList, setPostList ] = useState();

  useEffect(() => {
    axios.get('http://localhost:7000/api/posts')
    .then((response) => {
      setPostList({
        isFetched: true,
        data: response.data,
        error: false
      })
    })
    .catch((error) => {
      setPostList({
        isFetched: true,
        data: [],
        error: error
      })
    })
  }, [4])

  console.log(postList);

  return (
    <div>
    <Table hover striped >
      <thead>
        <tr>
          <th> ID </th>
          <th> Title </th>
          <th> Time </th>
          <th> Status </th>
        </tr>
      </thead>
      <tbody>
          {
            postList ? (
              postList.data.map((post, index) => (
                <tr key={index}>
                  <th>{post.post_id}</th>
                  <td>{post.title}</td>
                  <td>{post.time}</td>
                  <td>{post.status}</td>
                </tr>
              ))
            ) : (
              <Spinner>
                Loading...
              </Spinner>
            )
          }
      </tbody>
    </Table>
    </div>
  )
}

export default Posts