import React, { Component } from "react";
import UploadService from "../services/file-upload.service";

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);

    this.state = {
      currentFile: undefined,
      previewImage: undefined,
      message: "",
      fileName: undefined,

      imageInfos: [],
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        imageInfos: response.data,
      });
    });
  }

  selectFile(event) {
    const file = event.target.files[0];

    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    this.setState({
      currentFile: file,
      previewImage: URL.createObjectURL(file),
      message: "",
      fileName: filePath,
    });

    this.props.selectFile(file, filePath);
  }

  render() {
    const { previewImage, message } = this.state;

    return (
      <div>
        <div className="row">
          {previewImage && (
            <div>
              <img className="preview" src={previewImage} alt="" />
            </div>
          )}
          <div className="col-8 mt-2">
            <label className="btn btn-default p-0">
              <input type="file" accept="image/*" onChange={this.selectFile} required />
            </label>
          </div>
        </div>

        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div>
        )}
      </div>
    );
  }
}
