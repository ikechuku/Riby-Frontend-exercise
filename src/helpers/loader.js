import HoldOn from "react-hold-on";

var options = {
  theme: "sk-cube-grid",
  message: "Loading...",
  backgroundColor: "#1847B1",
  textColor: "white",
};

export const showLoader = () => {
  HoldOn.open(options);
};

export const hideLoader = () => {
  HoldOn.close();
};