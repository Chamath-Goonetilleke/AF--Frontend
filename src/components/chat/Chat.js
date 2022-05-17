import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pusher from "pusher-js";
import { getChats, sendMessage } from "../../services/chatServices";

import "./ChatStyles.css";

const OtherMessage = (props) => (
  <p className="chat__message">
    <span className="chat__name">{props.record.SendBy}</span>
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
    SendBy: params.id0.toString(),
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = (await getChats(params.id1.toString())).data;

      setMessages(response);
    }

    getRecords();

    var pusher = new Pusher("2cad138fbc7c142d3cfd", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe(params.id1.toString());

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
      if (record.SendBy === params.id0.toString()) {
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
    setForm({ Message: "", SendBy: params.id0.toString() });

    await sendMessage(params.id1.toString(), newMessage);
  }

  return (
    <div>
      <div className="chat__body">{messagesList()}</div>
      <div className="chat__footer">
        <form onSubmit={onSubmit}>
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Type the message here"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={form.Message}
              onChange={(e) => updateForm({ Message: e.target.value })}
            />
            <div>&nbsp;&nbsp;&nbsp;</div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
