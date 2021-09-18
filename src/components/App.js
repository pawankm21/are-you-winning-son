import StressSlider from "./StressSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import Menu from "./Menu";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      < Container>
        <StressSlider></StressSlider>
      </Container>
      <Container >
        <Menu />
      </Container>
    </Container>
  );
}

export default App;
