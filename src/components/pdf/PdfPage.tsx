import { Page } from "@react-pdf/renderer";
import React, { FC } from "react";
import PdfHeader from "./Header";

const PdfPage: FC = ({ children }) => {
  return (
    <Page size="A4">
      <PdfHeader />
      {children}
    </Page>
  );
};

export default PdfPage;
