export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alighItems: "center"
  };
  // const titleStyle = {};
  // const buttonStyle = {};

  return (
    <div style={containerStyle}>
      <p> Inline Styles</p>
      <button>FIGHT</button>
    </div>
  );
};
