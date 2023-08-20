import { redirect } from "react-router-dom";

export async function loader() {
  try {
    console.log("Auth loader");
    const response = await fetch("/api/check-session", {
      credentials: "include",
    });

    if (response.status === 401) {
      return redirect("account/login");
    }
    return null;
  } catch (err) {
    console.error(err);
  }
}
