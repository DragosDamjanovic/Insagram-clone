import { Avatar } from "@mui/material";

const Search = () => {
  return (
    <div className="col-2">
      <div className="col">
        <div className="row">
          <h3>Search</h3>
        </div>
        <div className="row"></div>
      </div>
      <div className="col">
        <div className="row d-flex justify-content-between">
          <span>Recent</span>
          <span>Clear all</span>
        </div>
        <div className="row">
          <a href="#" className="d-flex align-items-centertext-decoration-none">
            <Avatar
              alt="Remy Sharp"
              src="../public/instagram.svg"
              sx={{ width: 24, height: 24 }}
            />
            <span className="d-none d-sm-inline mx-1">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Search;
