import Image from "next/image";
import InputImage from "./components/inputImage";
import OutputImage from "./components/outputImage";
export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <InputImage />
        </div>
        <div className="col">
          <OutputImage />
        </div>
      </div>
    </div>
  );
}
