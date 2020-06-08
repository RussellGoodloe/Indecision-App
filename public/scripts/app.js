console.log("App.js is running");

//var template = <p>testing jsx from app.js</p>;
var template = /*#__PURE__*/React.createElement("h1", {
    id: "someid"
  }, "Something new");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);