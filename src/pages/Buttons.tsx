import Button from "../components/Button/Button";
import Card from "../components/Card/Card";

function ButtonPage() {
  return (
    <Card>
      <h2>Buttons</h2>
      <Button>PRIMARY</Button>
      <Button alt>SECONDARY</Button>
    </Card>
  );
}

export default ButtonPage;
