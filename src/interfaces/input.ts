export interface IInput {
  placeholder: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type: string;
  value?: string;
  scale?: string;
}
