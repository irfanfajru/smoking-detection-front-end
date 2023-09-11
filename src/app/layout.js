import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export const metadata = {
  title: "Deteksi Merokok Saat Berkendara Yolov7",
  description:
    "Sistem deteksi Merokok Saat Berkendara menggunakan YOLOv7 berbasis website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="text-center">
          <h1>Deteksi Merokok Saat Berkendara</h1>
          <h2>YOLOv7</h2>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
