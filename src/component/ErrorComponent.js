import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops Something went wrong</h1>
      <h2>Please Try letter</h2>
      <h2>
        {err.status} {err.statusText}
      </h2>
    </div>
  );
};
export default ErrorComponent;
