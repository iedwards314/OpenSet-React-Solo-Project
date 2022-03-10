import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import SpotsListPage from "./components/SpotsListPage";
import SpotsAddForm from "./components/SpotsAddForm";
import SpotsOnePage from "./components/SpotsOnePage";
import SpotsEditForm from "./components/SpotsEditform";
import ReviewAddForm from "./components/ReviewsAddForm";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route isLoaded={isLoaded} path="/spots/add" exact>
            <SpotsAddForm />
          </Route>
          <Route isLoaded={isLoaded} path="/spots/" exact>
            <SpotsListPage />
          </Route>
          <Route isLoaded={isLoaded} path="/spots/:id/edit" exact>
            <SpotsEditForm />
          </Route>
          <Route isLoaded={isLoaded} path="/spots/:id/reviewform" exact>
            <ReviewAddForm />
          </Route>
          <Route isLoaded={isLoaded} path="/spots/:id" exact>
            <SpotsOnePage />
          </Route>
          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
