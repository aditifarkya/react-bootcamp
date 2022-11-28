import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header-component";
import CardComponent from "./components/card-component/index.js";
import teamdata from "./components/card-component/config";

const CardContainer = () => {
  // using for loop only prints first object of teamdata array
  // for (let i = 0; i <= teamData.length; i++) {
  //   console.log(i);
  //   console.log(teamData[i]);
  //   return <CardComponent teamdata={teamData[i]} />;
  // }
  const card = teamdata.map((element) => {
    return <CardComponent teamdata={element} key={element.id} />;
  });
  return card;
};
const BodyComponent = () => {
  return (
    <div className="card__body">
      <h2 style={{ textAlign: "center" }}>
        Here's our team. <br></br> Meet our Team Members
      </h2>
      <div className="card__containers">
        <CardContainer />
      </div>
    </div>
  );
};
// main component to render header component
const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);

//create functional nested component
// const name = "Third";
// const SecondHeadingComponent = () => {
//   return <h2>Second Heading</h2>;
// };
// const HeadingComponent = () => {
//   return (
//     <div className="title">
//       <h1>First Heading</h1>
//       {<SecondHeadingComponent></SecondHeadingComponent>}
//       <h3>{name} Heading</h3>
//     </div>
//   );
// };

//create nested element using JSX

// const headerelement = (
//   <div className="title">
//     <h1>First Heading</h1>
//     <h2>Second Heading</h2>
//     <h3>Third Heading</h3>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headerelement);

//create nested element using react create element - (assignment-3)

// const headerele = React.createElement("div",{class:'title'},
// [React.createElement("h1",{},"First Heading"),
// React.createElement("h2",{},"Second Heading"),
// React.createElement("h3",{},"Third Heading"),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headerele);

//create element using react -(assignment-2)

// const ele = React.createElement("h1",{className:'rootele'},"This is my First Assignment");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(ele);

// using javascript - (assignment-2)

// const newele = document.createElement("h1");
// newele.innerText = "This is First Assignment";
// newele.className = "rootele";
// document.getElementById("root1").append(newele);
