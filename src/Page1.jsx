import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDa = () => history.push("/page1/da");

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/da", state: arr }}>Page1Da</Link>
      <br />
      <Link to="/page1/db">Page1Db</Link>
      <br />
      <button onClick={onClickDa}>Da</button>
    </div>
  );
};
