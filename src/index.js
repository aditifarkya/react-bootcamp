// using react
const ele = React.createElement("h1",{className:'rootele'},"This is my First Assignment");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);

// using javascript
const newele= document.createElement("h1");
newele.innerText="This is First Assignment";
newele.className="rootele";
document.getElementById("root1").append(newele);