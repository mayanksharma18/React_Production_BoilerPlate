/* eslint-disable no-console */
import { loginRequest } from "../authConfig";

export function handleLogin(instance, loginType) {
  if (loginType === "popup") {
    instance.loginPopup(loginRequest).catch((e) => {
      console.log(e);
    });
  } else if (loginType === "redirect") {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  }
}

export function handleLogout(instance, logoutType) {
  if (logoutType === "popup") {
    instance.logoutPopup({
      postLogoutRedirectUri: "/",
      mainWindowRedirectUri: "/",
    });
  } else if (logoutType === "redirect") {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  }
}
