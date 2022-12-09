import { convertObjectToCSSText } from "./convertObjectToCSSText";

const wrapperStyleObject: Partial<CSSStyleDeclaration> = {
  backgroundColor: "#00000077",
  height: "200px",
  width: "200px"
};

export const wrapperStyle = convertObjectToCSSText(wrapperStyleObject);
