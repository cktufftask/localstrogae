import React from "react";
import {reactLocalStorage} from "reactjs-localstorage";

const Users = (props) => {
  const [user, setUser] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const myRef = React.useRef(null);

  const fetchData = () => {
    fetch("https://api.github.com/search/users?q=ashish&page=" + parseInt(reactLocalStorage.get('page')))
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((json) => {
        let copyUser = user;
        let jsonT = copyUser?.items?.length>0?[ ...copyUser.items, ...json.items ]:json;
        setUser(jsonT);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  React.useEffect(() => {
    fetchData();
    const loadMore = (e) => {
              let t = Math.round(e.target.scrollTop);
              if (parseInt(window.innerHeight + t) === 3822) {
                setLoading(true);
                let g= parseInt( reactLocalStorage.get('page'));
                reactLocalStorage.set('page',g+1);
                fetchData();
              }
            };
            window.addEventListener("scroll", loadMore, true);
  }, []);
  
//   React.useEffect(() => {
//     const loadMore = (e) => {
//       let t = Math.round(e.target.scrollTop);
//       if (parseInt(window.innerHeight + t) === 3822) {
//         setLoading(true);
//         fetchData();
//       }
//     };
//     window.addEventListener("scroll", loadMore, true);
//     return () => window.removeEventListener("scroll", loadMore);
//   }, [page]);

  if (loading) return "Loading...";
  if (error) return "Oops!";
  const list = user?.items.map((item, index) => (
    <div className="card float-right" key={item.id}>
      <div className="row p-0">
        <div className="col-sm-5 ">
          <img
            className="d-block"
            src={item.avatar_url}
            alt={item.avatar_url}
            height="100px"
            width="100px"
            key={index}
          />
        </div>
        <div className="col-sm-7">
          <div className="card-block">
            <div className="card-title">{item.id}</div>
            <div className="card-title">{item.login}</div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="scroll" ref={myRef}>
        {list}
      </div>
      <div>Current Page: {reactLocalStorage.get('page')} </div>
    </>
  );
};

export default Users;
