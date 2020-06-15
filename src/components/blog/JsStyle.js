export let mainStyle = {
  // border: '1px solid blue',
  width: "inherit",
  height: "inherit",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "absolute",
  border: "1px solid white",
  animation: "showUp 3s ease-in forwards",
};

export const conStyle = {
  display: "flex",
  flexDirection: "row",
  // border: "1px solid white",
  width: "inherit",
  alignItems: 'center',
  justifyContent: 'space-around',
};
export const loveAnimation = {
  position: 'relative',
  // transition: 'all .2s ease-in-out',
  animation: 'expands infinite 4s ease-in-out 1s forwards',
}
export const btnFirstStyle = {
  width: "200px",
  height: "70px",
  fontSize: "1.3rem",
  transition: "all .5s ease",
  cursor: "pointer",
  outline: "none",
  background: `#f6d342`,
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  // boxShadow: 'inset 2px 2px 1px 2px #a6d352'
};

export const btnSecondStyle = {
  width: "200px",
  height: "70px",
  fontSize: "1.3rem",
  transition: "all .5s ease",
  cursor: "pointer",
  outline: "none",
  color: "orange",
  background: "#fff",
  border: "1px solid orange",
  borderRadius: "5px",
};

export const arrowMove = {
  cursor: "pointer",
  outline: "none",
};

export const phoneStyle = {
  width: "300px",
  height: "420px",
  // border: '1px solid black',
  padding: "1rem",
  marginTop: "100px",
  marginLeft: "80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gridRow: "1 / span 3",
  gridColumn: "3/3",
};

export let ChildTwoStyle = {
  width: "inherit",
  height: "inherit",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
};
