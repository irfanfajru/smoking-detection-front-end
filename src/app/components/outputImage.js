"use client";
import Image from "next/image";
export default function OutputImage({
  outputImage,
  detailDetection,
  processing,
}) {
  return (
    <div className="border rounded shadow-sm p-4">
      <div className="text-start">
        <h6>Output</h6>
      </div>
      <div className="text-center mb-2 mt-2">
        {/* dummy display */}
        {outputImage ? (
          <>
            <Image
              src={outputImage}
              className="rounded"
              width="400"
              height="270"
              alt="output image"
            />
            {/* detail deteksi */}
            <div className="text-start mt-4">
              <p>Total Deteksi : {detailDetection.length}</p>
              <hr></hr>
              <div className="row row-cols-3 gap-2">
                {detailDetection.map((val) => (
                  <>
                    <div className="col rounded border shadom-sm p-2">
                      <p>{val["label"]}</p>
                      {/* detail cigar */}
                      <ul>
                        {val["detail"].map((detVal) => (
                          <li>
                            {detVal["cls"]} {detVal["conf"]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ) : processing ? (
          <div>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Dalam proses deteksi...</p>
          </div>
        ) : (
          <i className="bi bi-image"></i>
        )}
        {/* icon */}
      </div>
    </div>
  );
}
