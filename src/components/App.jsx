import React from "react";
import { useMsal } from "@azure/msal-react";
import { useIsAuthenticated } from "@azure/msal-react";
// import { useNavigate } from "react-router-dom";
import { handleLogin } from "../utils/azureAD";
// import Dashboard from "./Dashboard/Dashboard";

const App = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
//   const navigate = useNavigate();
  if (isAuthenticated) {
    window.location.assign("https://mywork.seanergydigital.com/Dashboard/EmployeeDashBoard");
    return null;
  }
  return <button onClick={() => handleLogin(instance, "popup")}>Login</button>;
};

export default App;
