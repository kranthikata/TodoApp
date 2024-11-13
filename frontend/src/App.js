import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={RegistrationPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
