import React from 'react';

const styles = {
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#FAFAFA",
    marginTop: "30px",
    padding: "20px",
    border: "solid 1px black",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    height: "75px",
    width: "75px",
    margin: "10px",
  },
  title: {
    fontFamily: "Arial",
    fontSize: "50px",
    margin: "10px",
    color: "#212121",
  },
  subTitle: {
    margin: "10px",
    fontFamily: "Arial",
    fontSize: "30px",
    color: "#616161",
  }
}

const App = () => (
  <div style={styles.row}>
    <div style={styles.column}>
      <h1 style={styles.title}>Christian Hansen</h1>
      <h3 style={styles.subTitle}>Software Developer</h3>
      <div style={styles.row}>
        <a href="https://github.com/ChrisWcs">
          <img style={styles.icon} src="./githublogo.png" alt="Github"/>
        </a>
        <a href="https://medium.com/@cswcsdcs">
          <img style={styles.icon} src="./mediumlogo.png" alt="Medium"/>
        </a>
      </div>
    </div>
  </div>
);

export default App;
