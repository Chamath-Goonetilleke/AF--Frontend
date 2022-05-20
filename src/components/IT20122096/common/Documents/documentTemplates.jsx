import React, { Component } from "react";
import { getTemplates } from "../../../../services/IT20122096/templateService";

import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";

class DocumentTemplate extends Component {
  state = {
    templates: [],
    fileInputState: "",
    selectedFile: "",
    currentTemplate: "",
  };

  async componentDidMount() {
    const { data: templates } = await getTemplates();
    this.setState({ templates });
  }
  render() {
    const { templates } = this.state;
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {templates.map((template) => (
            <div className="col" key={template._id}>
              <div className="card text-center" style={{ width: "35rem" }}>
                <div
                  className="card-header"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  {template.type} Template
                </div>
                <div className="card-body">
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        border: "solid black",
                        height: "3rem",
                        width: "70%",
                        marginLeft: "17%",
                        marginTop: "1rem",
                        marginBottom: "0.8rem",
                        paddingTop: "0.5rem",
                      }}
                    >
                      File
                    </div>
                  </div>
                </div>
                <div className="card-footer text-muted">
                  <Button href={template.file} endIcon={<DownloadIcon />}>
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DocumentTemplate;
