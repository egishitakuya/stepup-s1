export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p> Styled JSX</p>
        <button>FIGHT</button>
      </div>
      <style jsx="true">{`
   .container{
    border: solid 2px red;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    aligh-items: center
   `}</style>
    </>
  );
};
