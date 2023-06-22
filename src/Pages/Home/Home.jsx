import Axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import axios from 'axios';

const Home = () => {
  const [dataMovie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/seasons/now')
      .then((result) => {
        console.log('data API', result.data.data);

        const responseAPI = result.data.data;
        setMovie(responseAPI);
      })
      .catch((err) => {
        console.log('error', err);
      });
  });
  console.log(dataMovie);

  return (
    <div>
      {/* <p>{JSON.stringify(dataMovie)}</p> */}
      <div className="row">
        {dataMovie.map((movie) => (
          <div class="col-md-4 col-sm-12 mb-3">
            <div class="card">
              <img
                src={`${movie.images.jpg.image_url}`}
                class="card-img-top"
                alt=""
              />

              <div class="card-body">
                <div class="card-title">
                  <h4>{movie.title}</h4>
                </div>
                {movie.synopsis}
              </div>

              <div class="card-footer">
                <a
                  href="https://www.malasngoding.com/card-bootstrap-4/"
                  class="card-link"
                >
                  Lihat
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
