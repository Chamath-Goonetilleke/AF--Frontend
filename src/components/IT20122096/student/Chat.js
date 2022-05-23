import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pusher from "pusher-js";
import { getChats, sendMessage } from "../../../services/IT20216078/chatServices";

import "./NewChatStyles.css";


const OtherMessage = (props) => (
  <p className="chat__message">
    <span className="chat__name">{props.record.name}</span>
    {props.record.Message}
  </p>
);

const MyMessage = (props) => (
  <p className="chat__message chat__receiver">
    <span className="chat__name">You</span>
    {props.record.Message}
  </p>
);

export default function Chat() {
  const params = useParams();

  const [form, setForm] = useState({
    Message: "",
    SendBy: localStorage.getItem("userId").toString(),
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = (await getChats(localStorage.getItem("groupId"))).data;

      setMessages(response);
    }

    getRecords();

    var pusher = new Pusher("2cad138fbc7c142d3cfd", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe(localStorage.getItem("groupId"));

    channel.bind("new_message", function (data) {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages.length]);

  function messagesList() {
    if (messages.length === 0) {
      return (
        <div>
          <h6 style={{ textAlign: "center" }}>Start a conversation...</h6>
        </div>
      );
    }
    return messages.map((record) => {
      if (record.SendBy === localStorage.getItem("userId").toString()) {
        return <MyMessage record={record} key={record._id} />;
      } else {
        return <OtherMessage record={record} key={record._id} />;
      }
    });
  }

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newMessage = { ...form };
    setForm({ Message: "", SendBy: localStorage.getItem("userId").toString() });

    await sendMessage(localStorage.getItem("groupId").toString(), newMessage);
  }

  return (
    <div
      style={{
        border: "solid black 1px",
        width: "50%",
        height: "30rem",
        marginTop: "2%",
      }}
      
    >
      <div
        
        className="chat__body"
        style={{ width: "100%", height: "60%", overflowY: "scroll" }}
      >
        {messagesList()}
      </div>
      <div
        className="chat__footer"
        style={{ width: "100%", border: "solid black 1px",marginTop:"5.3rem" }}
      >
        <form onSubmit={onSubmit}>
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Type here"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={form.Message}
              onChange={(e) => updateForm({ Message: e.target.value })}
              style={{ fontSize: "18px" }}
            />
            <div>&nbsp;&nbsp;&nbsp;</div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ fontSize: "18px" }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
