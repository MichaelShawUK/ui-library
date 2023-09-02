import StyledCard from "./StyledCard";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Card({ children }: Props) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
