import { redirect } from "react-router-dom";

export async function loader() {
  try {
    console.log("Auth loader");
    const response = await fetch(
      "http://analogdesigns.net:3003/api/orders/check-session",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (response.status === 200) {
      return null;
    }
    return redirect("../../account");
  } catch (err) {
    console.error(err);
  }
}
