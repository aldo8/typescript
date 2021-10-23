import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
const App = () => {
  return (
    <div>
      <h1>Learn Typescript</h1>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
