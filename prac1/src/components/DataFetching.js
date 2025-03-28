// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function DataFetching() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(response => {
//                 console.log(response);
//                 setPosts(response.data);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }, [])
//   return (
//     <div>
//       <ul>
//         {posts.map(post => {
//             return <li key={post.id}>{post.title}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default DataFetching



import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromBtn, setIdFromBtn] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
            .then(response => {
                console.log(response);
                setPost(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [idFromBtn])

    const clickHandler = () => {
        setIdFromBtn(id);
    }

  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)}></input>
      <button onClick={clickHandler}>Search</button>
      <p>{post.title}</p>
    </div>
  )
}

export default DataFetching
