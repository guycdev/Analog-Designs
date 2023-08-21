import { redirect } from "react-router-dom";

export async function loader() {
  try {
    console.log("Auth loader");
    const response = await fetch(
      "http://api.local.example.com:3003/api/order/check-session",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (response.status === 200) {
      return null;
    }
    // return redirect("../../account");
    return null;
  } catch (err) {
    console.error(err);
  }
}
