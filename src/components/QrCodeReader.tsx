import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export const QrCodeReader = (props: any) => {
  const [data, setData] = useState("");

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: { exact: "environment" } }}
        containerStyle={{ width: "100%" }}
      />
      {data == "" ? (
        <p>Please hold camera steady with qr code in focus</p>
      ) : (
        <a href={data}>{data}</a>
      )}
    </>
  );
};
