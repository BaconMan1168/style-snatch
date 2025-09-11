import { Outlet, Link } from "react-router"

function App({fonts, colors}) {
  const colorsAndFonts = [Array.isArray(colors), Array.isArray(fonts)];


  return (
    <main>
      <h1>StyleSnatch</h1>

      <Outlet context={{fonts, colors, colorsAndFonts}}></Outlet>

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
