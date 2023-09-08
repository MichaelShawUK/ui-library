import StyledInput from "./StyledInput";

interface Props {
  id: string;
  label: string;
  type: string;
  autofocus?: boolean;
}

function Input({ id, label, type, autofocus }: Props) {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} autoFocus={autofocus}></input>
    </StyledInput>
  );
}

export default Input;
