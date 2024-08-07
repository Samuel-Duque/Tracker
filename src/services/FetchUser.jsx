import axios from "axios";

export const fetchUser = async ({ userid }) => {
  console.log("userid: ", userid);
  try {
    const { data: response } = await axios.get(
      `https://trackerapi-8n4dl.ondigitalocean.app/user/${userid}`
    );
    return response[0] || null;
  } catch (e) {
    console.log(e);
  }
};
