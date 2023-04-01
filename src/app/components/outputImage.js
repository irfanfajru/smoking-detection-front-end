import Image from "next/image";
export default function OutputImage() {
  return (
    <div className="border rounded shadow-sm p-4">
      <div className="text-start">
        <h6>Output</h6>
      </div>
      <div className="text-center mb-2 mt-2">
        {/* dummy display */}
        <Image
          src="/example-output.png"
          className="rounded"
          width="400"
          height="270"
        />
        {/* icon */}
        {/* <i className="bi bi-image"></i> */}
      </div>
    </div>
  );
}
