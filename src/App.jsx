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
          <Link to="/colors">
            <button>Show Saved Colors</button>
          </Link>
          <Link to="/fonts">
            <button>Show Saved Fonts</button>
          </Link>
          <Link to="/">
            <button>Home</button>
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
