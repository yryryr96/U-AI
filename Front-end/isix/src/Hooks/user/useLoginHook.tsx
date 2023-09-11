// import { useRouter } from "next/navigation";
// import useUserStore from "@/stores/useUserStore";
// import { useState, useEffect } from "react";
// import axios from "axios";

// import { useCookies } from "react-cookie";
// import loginPost from "@/api/user/loginPost";
// import loginGet from "@/api/user/loginGet";

// interface User {
//   email: String;
//   password: String;
// }

// export const useLoginHook = () => {
//   const router = useRouter();
//   const setUserInformation = useUserStore((state: any) => state.setUserInformation);
//   const userInformation = useUserStore((state: any) => state.userInformation);
//   const login = useUserStore((state: any) => state.login);

//   const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
//   const [isRemember, setIsRemember] = useState(false);

//   useEffect(() => {
//     if (cookies.rememberUserId !== undefined) {
//       handleUserId(cookies.rememberUserId);
//       setIsRemember(true);
//     }
//   }, []);

//   const handleOnChange = (e: any) => {
//     setIsRemember(e.target.checked);
//     if (!e.target.checked) {
//       removeCookie("rememberUserId");
//     }
//   };

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const [inputState, setInputState] = useState({
//     email: 1,
//     password: 1,
//   });

//   const handleUserId = (data: any) => {
//     setUser({
//       ...user,
//       ["email"]: data,
//     });
//   };

//   const handleChange = (e: any) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });

//     setInputState({
//       ...inputState,
//       [e.target.name]: 1,
//     });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     if (user.email === "") {
//       setInputState({
//         ...inputState,
//         ["email"]: 0,
//       });
//       alert("이메일을 입력해주세요.");
//       return;
//     } else if (user.password === "") {
//       setInputState({
//         ...inputState,
//         ["password"]: 0,
//       });
//       alert("비밀번호를 입력해주세요");
//       return;
//     } else {
//       try {
//         const res = await loginPost(user);
//         if (res.data.success === true) {
//           login();

//           if (isRemember) {
//             setCookie("rememberUserId", user.email, { path: "/" });
//           }

//           const response = await loginGet(res.data.response.accessToken);
//           await setUserInformation(response.data.response);

//           router.push("/");
//           alert("로그인에 성공하였습니다.");
//         } else if (res.data.success === false) {
//           alert(res.data.apiError.message);
//         }
//       } catch (err) {
//         //console.log(err);
//       }
//     }
//   };
//   return { handleChange, handleSubmit, handleUserId, handleOnChange, inputState, user, isRemember };
// };
