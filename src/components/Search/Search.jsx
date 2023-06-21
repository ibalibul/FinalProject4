const Search = () => {
  return (
    <div>
      <nav className="navbar bg-drak position-absolute top-0 end-0">
        <div className="container-fluid">
          <form class="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Search;
