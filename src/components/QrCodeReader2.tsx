import React, { useState } from "react";
import QrScanner from "qr-scanner";

export const QrCodeReader2 = (props: any) => {
  const [data, setData] = useState("");

  const qrScanner = new QrScanner(
    videoElem,
    (result) => console.log("decoded qr code:", result),
    {
      /* your options or returnDetailedScanResult: true if you're not specifying any other options */
    }
  );
  return (
    <>
      <h1>Hello!</h1>
      <video id='video-source'></video>
      <button></button>
    </>
  );
};
