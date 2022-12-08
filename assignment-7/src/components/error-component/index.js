import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Your have encountered an error !!!!</h1>
      <h2 style={{ color: "red" }}>{error.data}</h2>
      <h3>Description: {error.statusText}</h3>
    </div>
  );
};
export default ErrorComponent;
