import React, { Component } from 'react'
import { getTopicRequests } from '../../../services/IT20122096/pannelMemReqs';

class TopicRequestList extends Component {
  state = { requests:[] };

  async componentDidMount() {
    const { data: requests } = await getTopicRequests();
    this.setState({ requests });
  }

  render() {
    const { requests } = this.state;
    return (
      <div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          <div
            className="row"
            style={{
              width: "70rem",
              padding: "1rem",
              fontSize: "1.6rem",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            <div className="col">GROUP ID</div>
            <div className="col">TOPIC </div>
            <div className="col">RESEARCH FIELD</div>
            <div className="col"></div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          <ul className="list-group">
            {requests.map((request) => (
              <li
                key={request._id}
                className="list-group-item"
                style={{
                  width: "70rem",
                  padding: "1rem",
                  backgroundColor: "#1c1c1b",
                  marginBottom: "0.5rem",
                  color: "white",
                  fontSize: "1.1rem",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col">{request.groupid}</div>
                    <div className="col">{request.topic}</div>
                    <div className="col">{request.field}</div>
                    <div className="col" style={{ marginRight: "-10rem" }}>
                      <button className="btn btn-danger"> View </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
 
export default TopicRequestList;