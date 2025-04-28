export interface IButton {
  type: "submit" | "button";
  onClick: () => void;
  label: string;
}
