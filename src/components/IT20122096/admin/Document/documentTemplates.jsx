import React, { Component } from "react";
import {
  delteTemplates,
  getTemplates,
  uploadTemplate,
} from "../../../../services/IT20122096/templateService";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import Input from "./../../common/input";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

class DocumentTemplate extends Component {
  state = {
    templateNames: [
      " ",
      "Presentation Template",
      "Preposal Template",
      "Report Template",
      "Final Thesis Template",
    ],
    templates: [],
    selectedFile: "",
    currentTemplate: "",
  };

  async componentDidMount() {
    const { data: templates } = await getTemplates();
    this.setState({ templates });
  }
  handleInputChange = (e) => {
    const { value: currentTemplate } = e.currentTarget;
    this.setState({ currentTemplate });
    console.log(currentTemplate);
  };

  handleChange = (e) => {
    const file = e.target.files[0];
    this.setState({ selectedFile: file });
  };
  handleDelete = async (id) => {
    await delteTemplates(id).then(() => {
      toast.success("Deleted Successfully",{autoClose:1000})
      setTimeout(() => window.location = "/profile", 2000);
    }).catch((error) => {
       toast.error(error.response.data);
    })
  };
  uploadImage = async () => {
    const formData = new FormData();
    formData.append("template", this.state.selectedFile);
    await toast.promise(uploadTemplate(formData, this.state.currentTemplate), {
      pending: "Uploading",
      success: "Uploaded Successfully",
      error: "Something Went Wrong",
    });
    setTimeout(() => window.location = "/profile", 1000);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.selectedFile) return;
    console.log(this.state.selectedFile);
    this.uploadImage(this.state.selectedFile);
  };
  render() {
    const { templates, selectedFile, currentTemplate } = this.state;
    return (
      <div>
        <div style={{ width: "40%", marginBottom: "2rem", marginLeft: "60%" }}>
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <div>
              <Input
                label="Create new Template"
                name="template"
                type="text"
                onChange={this.handleInputChange}
              />
              <div style={{ display: "flex" }}>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="template"
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    marginRight: "1rem",
                  }}
                  onChange={(e) => this.handleChange(e)}
                  disabled={currentTemplate === ""}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<FileUploadIcon />}
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                  disabled={selectedFile === ""}
                >
                  Upload
                </Button>
              </div>
            </div>
          </form>
        </div>
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
                    <div>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        style={{ marginTop: "0.5rem", marginLeft: "0.8rem" }}
                        onClick={() => this.handleDelete(template._id)}
                      >
                        <DeleteIcon fontSize="inherit" color="error" />
                      </IconButton>
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
