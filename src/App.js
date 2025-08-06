import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
