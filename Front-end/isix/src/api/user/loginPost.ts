// import api from "../api";

// const loginPost = async (user: any) => {
//   const res = await api({
//     method: "post",
//     url: "/authenticate",
//     data: {
//       ...user,
//     },
//   });
//   if (res.data.success === true) {
//     localStorage.setItem("email", user.email);
//     localStorage.setItem("password", user.password);
//     localStorage.setItem("accessToken", res.data.response.accessToken);
//     localStorage.setItem("refreshToken", res.data.response.refreshToken);
//   }
//   return res;
// };

// export default loginPost;
