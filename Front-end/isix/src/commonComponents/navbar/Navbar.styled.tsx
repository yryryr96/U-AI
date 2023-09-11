// import styled, { css } from "styled-components";
// import Link from "next/link";

// const StyledNavbar = styled.div.attrs<any>((props) => ({}))`
//   ${(props) => {
//     let bgColor;
//     const yellow = props.theme.colors.yellow;
//     const white = props.theme.colors.white;
//     const purple = props.theme.colors.purple;

//     const surveylistcolor = props.selectbtn === "1" ? "#C6B6FF" : "#FFFAAE";

//     const height = props.pathname === "/" || props.pathname === "/subpage" ? "72px" : "56px";

//     const minwidth = props.pathname === "/" ? "1000px" : "550px";
//     switch (props.pathname) {

//       case "/":
//         bgColor = white;
//         break;
//       case "/subpage" :
//         bgColor = purple;
//         break;
//       default:
//         bgColor = yellow;
//     }

//     return css`
//       width: 100%;
//       height: ${height};
//       background-color: ${bgColor};
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       padding: 8px 30px;
//       min-width: ${minwidth};
//       position: fixed;
//       z-index: 100;
//     `;
//   }};
// `;


// const StyledMidComp = styled.div.attrs<any>((props) => ({}))`
//   ${(props) => {
//     const size = props.pathname === "/" || props.pathname === "/subpage" ? "85%" : "60%";
//     const jc =
//       props.pathname === "a" || props.pathname === "b"
//         ? "space-between"
//         : props.pathname === "third"
//           ? "space-between"
//           : "center";
//     const ai = props.pathname === "/" || props.pathname === "/subpage" ? "center" : "";
//     return css`
//       width: ${size};
//       display: flex;
//       justify-content: ${jc};
//       align-items: ${ai};
//       gap: 30px;
//     `;
//   }};
// `;
// const StyledEndComp = styled.div.attrs<any>((props) => ({}))`
//   ${(props) => {
//     const size = props.pathname === "/" || props.pathname === "/subpage" ? "10%" : "20%";
//     return css`
//       width: ${size};
//       display: flex;
//       justify-content: flex-end;
//       gap: 10px;
//     `;
//   }};
// `;


// export {
//   StyledMidComp,
//   StyledEndComp,
//   StyledNavbar,
// };
