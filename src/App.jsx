import { Outlet, Link } from "react-router"
import "./App.css"
import styles from "./styles.module.css"

function App() {
  return (
    <>
      <h1>StyleSnatch</h1>

      <main>
        <Outlet className={styles.outlet}></Outlet>
      </main>

      <nav>
          <Link to="/">
            <button className={styles.btn}>Home</button>
          </Link>
          <Link to="/colors">
            <button className={styles.btn}>Show Saved Colors</button>
          </Link>
          <Link to="/fonts">
            <button className={styles.btn}>Show Saved Fonts</button>
          </Link>
        </nav>
    </>
    
  );
}

/*
1. styling for other pages
2. naming feature
3. css code
*/

export default App;
