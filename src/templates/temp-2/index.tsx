import * as React from "react";
import { faker } from "@faker-js/faker";

interface ITemplate2Props {}

const Template2: React.FunctionComponent<ITemplate2Props> = (props) => {
  const randomName = faker.person.fullName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email();
  return <div>Template - 2</div>;
};

export default Template2;
