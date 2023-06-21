import Axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [dataMovie, setMovie] = useState([]);

  useEffect(() => {
    Axios.get('https://6340e78716ffb7e275c7134c.mockapi.io/film')
      .then((result) => {
        console.log('data API', result.data);
        const responseAPI = result.data;
        setMovie(responseAPI.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  });

  return (
    <div>
      {/* <p>{JSON.stringify(dataMovie.data)}</p> */}
      <div class="row">
        <div class="col-md-4 col-sm-12 mb-3">
          <div class="card">
            <img src="gambar1.jpg" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="card-title">
                <h4>Tutorial Bootstrap 4 bagian 1</h4>
              </div>
              Selamat datang di tutorial bootstrap 4 lengkap dari paling dasar
              sampai mahir, untuk pemula sampai expert.
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

        <div class="col-md-4 col-sm-6 mb-3">
          <div class="card">
            <img src="gambar1.jpg" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="card-title">
                <h4>Tutorial Bootstrap 4 bagian 2</h4>
              </div>
              Selamat datang di tutorial bootstrap 4 lengkap dari paling dasar
              sampai mahir, untuk pemula sampai expert.
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

        <div class="col-md-4 col-sm-6 mb-3">
          <div class="card">
            <img src="gambar1.jpg" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="card-title">
                <h4>Tutorial Bootstrap 4 bagian 3</h4>
              </div>
              Selamat datang di tutorial bootstrap 4 lengkap dari paling dasar
              sampai mahir, untuk pemula sampai expert.
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
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-12 mb-3">
          <div class="card">
            <img src="gambar1.jpg" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="card-title">
                <h4>Tutorial Bootstrap 4 bagian 1</h4>
              </div>
              Selamat datang di tutorial bootstrap 4 lengkap dari paling dasar
              sampai mahir, untuk pemula sampai expert.
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

        <div class="col-md-4 col-sm-6 mb-3">
          <div class="card">
            <img src="gambar1.jpg" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="card-title">
                <h4>Tutorial Bootstrap 4 bagian 2</h4>
              </div>
              Selamat datang di tutorial bootstrap 4 lengkap dari paling dasar
              sampai mahir, untuk pemula sampai expert.
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

        <div class="col-md-4 col-sm-6 mb-3">
          <div class="card">
            <img src="gambar1.jpg" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="card-title">
                <h4>Tutorial Bootstrap 4 bagian 3</h4>
              </div>
              Selamat datang di tutorial bootstrap 4 lengkap dari paling dasar
              sampai mahir, untuk pemula sampai expert.
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
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-12 mb-3">
          <div class="card">
            <img src="gambar1.jpg" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="card-title">
                <h4>Tutorial Bootstrap 4 bagian 1</h4>
              </div>
              Selamat datang di tutorial bootstrap 4 lengkap dari paling dasar
              sampai mahir, untuk pemula sampai expert.
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

        <div class="col-md-4 col-sm-6 mb-3">
          <div class="card">
            <img src="gambar1.jpg" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="card-title">
                <h4>Tutorial Bootstrap 4 bagian 2</h4>
              </div>
              Selamat datang di tutorial bootstrap 4 lengkap dari paling dasar
              sampai mahir, untuk pemula sampai expert.
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

        <div class="col-md-4 col-sm-6 mb-3">
          <div class="card">
            <img src="gambar1.jpg" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="card-title">
                <h4>Tutorial Bootstrap 4 bagian 3</h4>
              </div>
              Selamat datang di tutorial bootstrap 4 lengkap dari paling dasar
              sampai mahir, untuk pemula sampai expert.
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
      </div>
    </div>
  );
};

export default Home;
