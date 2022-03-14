/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px pink;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    aligh-items: center;
  `;
  return (
    <div css={containerStyle}>
      <p> Emotion</p>
      <button>FIGHT</button>
    </div>
  );
};
