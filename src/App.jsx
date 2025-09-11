import { Outlet, Link } from "react-router"
import "./App.css"

function App() {
  return (
    <main>
      <h1>StyleSnatch</h1>

      <Outlet></Outlet>

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
      
      
    </main>
  );
}

export default App;
