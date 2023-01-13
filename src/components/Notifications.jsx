import { Avatar, Image } from "antd";

const Notifications = () => {
  return (
    <div className="col-2">
      <div className="col">
        <div className="row">
          <h3>Notifications</h3>
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
              src={
                <Image
                  src="../public/instagram"
                  style={{
                    width: 32,
                  }}
                />
              }
            />
            <span className="d-none d-sm-inline mx-1">
              <strong>Skrba</strong> started following yo.
            </span>
            <button>Follow</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
