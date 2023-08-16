"use client";
import Image from "next/image";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
export default function InputImage({
  setOutputImage,
  setDetailDetection,
  setProcessing,
}) {
  const inputFile = useRef(null);
  const [image, setImage] = useState(null);

  // clear input file
  const clearInput = () => {
    setImage(null);
    setOutputImage(null);
    setDetailDetection(null);
    inputFile.current.value = null;
  };

  // display selected image
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  // upload handler
  const upload = () => {
    const data = new FormData();
    data.append("image", inputFile.current.files[0]);
    setOutputImage(null);
    setProcessing(true);
    console.log("Sending");
    axios
      .post("http://127.0.0.1:5000/detect", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("data = ", response.data);
        setOutputImage(response.data.data.resultUrl);
        setDetailDetection(response.data.data.detailDetection);
        setProcessing(false);
      })
      .catch((error) => {
        alert(error);
        setProcessing(false);
        setDetailDetection(null);
        setOutputImage(null);
      });
  };

  // example image on click
  const exampleImage = () => {
    setImage("/example-image.png");
    setOutputImage(null);
    setProcessing(true);
    console.log("Sending");
    axios
      .post(
        "http://127.0.0.1:5000/example",
        { file_url: "http://127.0.0.1:3000/example-image.png" },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("data = ", response.data);
        setOutputImage(response.data.data.resultUrl);
        setDetailDetection(response.data.data.detailDetection);
        setProcessing(false);
      })
      .catch((error) => {
        alert(error);
        setProcessing(false);
        setDetailDetection(null);
        setOutputImage(null);
      });
  };

  return (
    <div className="border rounded shadow-sm p-4">
      <div className="text-start">
        <h6>Input</h6>
      </div>
      <div className="text-center mb-2 mt-2">
        {!image ? (
          <i className="bi bi-image"></i>
        ) : (
          <Image
            src={image}
            className="rounded"
            width="300"
            height="150"
            alt="input image"
          />
        )}
      </div>
      <div>
        <input
          ref={inputFile}
          onChange={onImageChange}
          accept="image/*"
          type="file"
          className="form-control"
        ></input>
      </div>
      <p className="mt-2">Example</p>
      <div className="row g-2" style={{ marginTop: -25 }}>
        <div className="col-4">
          <button className="btn p-0">
            <Image
              onClick={exampleImage}
              src="/example-image.png"
              className="rounded"
              style={{ objectFit: "cover" }}
              width="100"
              height="50"
              alt="example image"
            />
          </button>
        </div>
        <div className="col-4">
          <button onClick={clearInput} className="btn btn-secondary w-100">
            Clear
          </button>
        </div>
        <div className="col-4">
          <button onClick={upload} className="btn btn-primary w-100">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
