import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// api
// https://yts.mx/api/v2/movie_details.json?movie_id=
function Detail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      const data = await response.json();
      setDetail(data.data.movie);
    }
    getMovie(); 
  }, [id]);

  console.log(detail);
  return <h1>Detail</h1>
}

export default Detail;