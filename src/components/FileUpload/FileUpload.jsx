import React, { useState, useRef } from "react";
import "./file-upload.scss";
import cloud from "../../assets/icons/cloud.png";
import Image from "../Image/Image";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import errorIcon from "../../assets/icons/error.svg";

const FileUpload = ({ title, desc, btn }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  console.log("file", file);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    if (selectedFile.size > 0.1 * 1024 * 1024) {
      setError("Fayl ölçüsü böyükdür");
      setFile(null);
    } else {
      setFile(selectedFile);
      setError("");
    }
  };
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const removeFile = () => {
    setFile(null);
    fileInputRef.current.value = "";
    setError("");
  };

  return (
    <div className="file-upload">
      <div className={`upload-container ${error ? "error" : ""}`}>
        <label className="upload-box">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            hidden
          />
          <div className="upload-content">
            <Image className="icon" src={cloud} />
            <p>{title}</p>
            <span>{desc}</span>
            <button className="upload-button" onClick={triggerFileInput}>
              {btn}
            </button>
          </div>
        </label>
      </div>
      {file && (
        <div className="file-info">
          <span className="file-name">{file.name}</span>

          <Image
            src={deleteIcon}
            className="delete-icon"
            onClick={removeFile}
          />
        </div>
      )}
      {error && (
        <p className="error-message">
          <Image className="error-img" src={errorIcon} /> {error}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
