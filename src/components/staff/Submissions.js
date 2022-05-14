import React, { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const DisplayLink = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>
      <a className="btn btn-primary" href={`${props.url}`} target={"_blank"}>
        Download
      </a>
    </td>
  </tr>
);

export default function Submissions(props) {
  const [submissions, setSubmissions] = useState(new Map());

  useEffect(() => {
    const listRef = ref(storage, `${props.id}`);
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then(function (url) {
            setSubmissions(new Map(submissions.set(url, itemRef.name)));
          });
        });
      })
      .catch((error) => {
        window.alert(error);
      });
  }, [submissions.size]);

  function displayFiles() {
    return [...submissions.keys()].map((key) => {
      return <DisplayLink url={key} name={submissions.get(key)} key={key} />;
    });
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Submission Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayFiles()}</tbody>
      </table>
      <br />
    </div>
  );
}
