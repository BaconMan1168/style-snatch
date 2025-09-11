import { Outlet } from "react-router-dom"

function App({fonts, colors}) {
  const colorsAndFonts = [Array.isArray(colors), Array.isArray(fonts)];


  return (
    <main>
      <h1>StyleSnatch</h1>
      <Link to="/colors">
        <button>Show Saved Colors</button>
      </Link>
      <Link to="/fonts">
        <button>Show Saved Fonts</button>
      </Link>

      <Outlet context={{fonts, colors}}></Outlet>
    </main>
  );
}

export default App;
