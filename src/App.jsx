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
      <h2>Colors:</h2>
      <ul>
        {colorsAndFonts[0] && colors.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
      <h2>Fonts:</h2>
      <ul>
        {colorsAndFonts[1] && fonts.map((f, i) => <li key={i}>{f.font} ({f.size})</li>)}
      </ul>
    </main>
  );
}

export default App;
