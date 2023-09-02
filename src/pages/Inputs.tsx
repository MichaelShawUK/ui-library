import Card from "../components/Card/Card";
import Input from "../components/Input/Input";

function InputPage() {
  return (
    <Card>
      <h2>Inputs</h2>
      <Input id="1" type="text" label="Name" />
      <Input id="2" type="text" label="Email" />
    </Card>
  );
}

export default InputPage;
