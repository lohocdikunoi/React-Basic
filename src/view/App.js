import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Nav from "./Navigation/Nav";
import Home from "./Example/Home";
import MyComponent from "./Example/MyComponent";
import ListUser from "./Users/ListUser";
import Detail from "./Users/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Todo">
              <ListTodo />
            </Route>
            <Route path="/About">
              <MyComponent />
            </Route>
            <Route path="/User" exact>
              <ListUser />
            </Route>
            <Route path="/User/:id">
              <Detail />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
