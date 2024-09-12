/* eslint-disable react/prop-types */
import { Filters } from "./Filters";

export function Header(props) {
  return (
    <header>
      <Filters props={props} />
    </header>
  );
}
