import { redirect } from "react-router-dom";

export async function loader() {
  try {
    console.log("Auth loader");
    const response = await fetch(

      "http://ec2-18-215-255-171.compute-1.amazonaws.com:3003/api/orders/check-session",
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
