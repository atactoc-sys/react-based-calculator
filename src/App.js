/**
 * The App function returns a div element containing a Calculator component.
 * @returns The App component is returning a div with the className "App" and a Calculator component.
 */
import "./App.css";
import Calculator from "./Components/Calculator/Calculator";

function App() {
  return (
    /* The code is creating a div element with the class name "App" and rendering a Calculator component
   inside it. */
    <div className="App">
      <Calculator />
    </div>
  );
}

/* `export default App;` is exporting the `App` component as the default export of the module. This
means that when another module imports this module, it will receive the `App` component as the
default export. */
export default App;
