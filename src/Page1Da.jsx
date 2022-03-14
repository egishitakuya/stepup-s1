import { useLocation, useHistory } from "react-router-dom";

export const Page1Da = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  // const onClickBack = () => history.push("/page1")
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1Da</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
