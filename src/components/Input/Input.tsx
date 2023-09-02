import StyledInput from "./StyledInput";

interface Props {
  id: string;
  label: string;
  type: string;
}

function Input({ id, label, type }: Props) {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type}></input>
    </StyledInput>
  );
}

export default Input;
