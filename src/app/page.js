"use client";
import Image from "next/image";
import InputImage from "./components/inputImage";
import OutputImage from "./components/outputImage";
import { useState } from "react";
export default function Home() {
  const [outputImage, setOutputImage] = useState(null);
  const [processing, setProcessing] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <InputImage
            setOutputImage={setOutputImage}
            setProcessing={setProcessing}
          />
        </div>
        <div className="col">
          <OutputImage outputImage={outputImage} processing={processing} />
        </div>
      </div>
    </div>
  );
}
