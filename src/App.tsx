import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Button alt>Cancel</Button>
      <span style={{ color: "white" }}>....</span>
      <Button>Confirm</Button>
      <Card>Card content</Card>
    </div>
  );
}

export default App;
