import React from "react";
const Group = ({items}) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div key={item._id} className="col 1">
              <div className="card" style={{ width: "18rem" }}>
                <h5 className="card-header">{item.groupe}</h5>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Group;
