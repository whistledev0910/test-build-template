import Template1 from "@/templates/temp-1";
import Template2 from "@/templates/temp-2";
import * as React from "react";

interface IPageProps {}

const Page: React.FunctionComponent<IPageProps> = (props) => {
  switch (process.env.TEMPLATE) {
    case "temp-1":
      return <Template1 />;

    case "temp-2":
      return <Template2 />;
    default:
      return <Template1 />;
  }
};

export default Page;
