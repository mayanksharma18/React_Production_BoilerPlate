import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import { handleLogout } from "../../utils/azureAD";
// import { useIsAuthenticated } from "@azure/msal-react";

const Dashboard = () => {
  // const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();
  return (
    <div>
      <AuthenticatedTemplate>
        <p>You are signed in!</p>
        <button onClick={() => handleLogout(instance, "popup")}>
          Signout
        </button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default Dashboard;
