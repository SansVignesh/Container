// import './App.css';
import React from "react";
// import ReactDOM from 'react-dom';
// import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// const defaultHistory = createBrowserHistory();

const{
  REACT_APP_CUSTOMERS_HOST: customersHost,
  REACT_APP_CLIENTS_HOST: clientHost
}=process.env;


function Customers({ history }) {
  return <MicroFrontend history={history} host={customersHost} name="Customers" />;
}

function Clients({ history }) {
  return <MicroFrontend history={history} host={clientHost} name="Clients" />;
}
// function CustomerBtn({ history }) {
//   return <MicroFrontend history={history} host={customersHost} name="Customers" />;
// }

function Home() {
return (
  <div className="home">
    <div className="content">
      <div className="Customer">
          <Customers/>
      </div>
      <div>
         <Clients/>
      </div>
    </div>
  </div>
);
}




function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/cutomer" component={CustomerBtn} /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
