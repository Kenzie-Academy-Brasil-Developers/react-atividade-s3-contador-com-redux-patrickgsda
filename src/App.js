import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCount, reduceCount } from "./store/modules/counter/actions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function App() {
  const dispatch = useDispatch();
  const counts = useSelector((state) => state.count);
  const handleAddCount = (count) => dispatch(addCount(count));
  const handleReduceCount = (count) => dispatch(reduceCount(count));
  return (
    <div className="App">
      <header className="App-header">
        <h1>{counts.count}</h1>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ borderRadius: "5px 0px 0px 5px" }}
            variant="contained"
            onClick={handleAddCount}
          >
            +
          </Button>
          <Button
            sx={{ borderRadius: "0px 5px 5px 0px" }}
            variant="contained"
            onClick={handleReduceCount}
          >
            -
          </Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
