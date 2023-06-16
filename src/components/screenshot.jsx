// import React, { createRef } from "react";
// import { useScreenshot, createFileName } from "use-react-screenshot";

// export const ScreenShot = () => {
//   const ref = createRef(null);

//   const [image, takeScreenshot] = useScreenshot({
//     type: "image/jpeg",
//     quality: 1.0,
//   });

//   const download = (
//     image,
//     { name = "screen capture", extension = "jpg" } = {}
//   ) => {
//     const a = document.createElement("a");
//     a.href = image;
//     a.download = createFileName(extension, name);
//     a.click();
//   };

//   const downloadScreenshot = () => {
//     takeScreenshot(ref.current).then(download);
//   };

//   return (
//     <div>
//       <button onClick={downloadScreenshot} className="bg-white text-blue-900">capture</button>
//     </div>
//   );
// };
