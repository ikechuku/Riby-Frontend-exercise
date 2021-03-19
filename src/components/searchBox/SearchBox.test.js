import { render } from "@testing-library/react";
import SearchBox from "./index";


test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<SearchBox />, div);
});

