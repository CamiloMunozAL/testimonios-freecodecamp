import "./App.css";
import Testimonio from "./componentes/Testimonio.js";

// Componente principal de la aplicación
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios: esto es lo que dicen los pibes</h1>
        <Testimonio
          imagen="emma"
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de minas y lapiceros"
          empresa="Chocolates S.A."
          testimonio="Me gusta crear muchas cosas, pero sobre todo me gusta el chocolate. ¡Gracias por todo!"
        />
      </div>
    </div>
  );
}

export default App;
