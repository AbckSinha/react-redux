import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
// import PostContainer from "../src/features/posts/container/post-container";

const Posts = React.lazy(() =>
  import("../src/features/posts/container/post-container")
);

const Counter = React.lazy(() =>
  import("../src/features/counter/container/CounterContainer")
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li className="navigation">
                  <NavLink to="/posts">Posts</NavLink>
                </li>
                <li className="navigation">
                  <NavLink to="/Counter">Counter</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Suspense fallback={<div>...Loading</div>}>
                  <Posts />
                </Suspense>
              )}
            />
            <Route
              path="/posts"
              exact
              render={() => (
                <Suspense fallback={<div>...Loading</div>}>
                  <Posts />
                </Suspense>
              )}
            />

            <Route
              path="/counter"
              exact
              render={() => (
                <Suspense fallback={<div>...Loading</div>}>
                  <Counter />
                </Suspense>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
