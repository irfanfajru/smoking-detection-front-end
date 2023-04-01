"use client";
import Image from "next/image";
export default function OutputImage({ outputImage, processing }) {
  return (
    <div className="border rounded shadow-sm p-4">
      <div className="text-start">
        <h6>Output</h6>
      </div>
      <div className="text-center mb-2 mt-2">
        {/* dummy display */}
        {outputImage ? (
          <Image
            src={outputImage}
            className="rounded"
            width="400"
            height="270"
            alt="output image"
          />
        ) : processing ? (
          <div>
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p>Sedang dalam proses deteksi...</p>
          </div>
        ) : (
          <i className="bi bi-image"></i>
        )}
        {/* icon */}
      </div>
    </div>
  );
}
