import React from "react";

import { Name } from "./02-Person.types";

type PersonListProps = {
  names: Name[];
};
function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;
