import Image from "next/image";
export default function InputImage() {
  return (
    <div className="border rounded shadow-sm p-4">
      <div className="text-start">
        <h6>Input</h6>
      </div>
      <div className="text-center mb-2 mt-2">
        {/* dummy display */}
        <Image
          src="/example-image.png"
          className="rounded"
          width="300"
          height="150"
        />
        {/* icon */}
        {/* <i className="bi bi-image"></i> */}
      </div>
      <div>
        <input type="file" className="form-control"></input>
      </div>
      <p className="mt-2">Example</p>
      <div className="row g-2" style={{ marginTop: -25 }}>
        <div className="col-4">
          <button className="btn p-0">
            <Image
              src="/example-image.png"
              className="rounded"
              style={{ objectFit: "cover" }}
              width="100"
              height="50"
            />
          </button>
        </div>
        <div className="col-4">
          <button className="btn btn-secondary w-100">Clear</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100">Submit</button>
        </div>
      </div>
    </div>
  );
}
