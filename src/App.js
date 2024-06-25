import "./App.css";
import Testimonio from "./componentes/Testimonio.js";

// Componente principal de la aplicación
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios: esto es lo que dicen los pibes</h1>
        <Testimonio
          imagen="shawn"
          nombre="Shown Mendes"
          pais="Japon"
          cargo="Dentista de tiburones"
          empresa="El dentista de los tiburones"
          testimonio="Me gusta los tiburones y los dientes. ¡Gracias por todo!"
        />
        <Testimonio
          imagen="emma"
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de minas y lapiceros"
          empresa="Chocolates S.A."
          testimonio="Me gusta crear muchas cosas, pero sobre todo me gusta el chocolate. ¡Gracias por todo!"
        />
        <Testimonio
          imagen="sarah"
          nombre="Sarah Drasner"
          pais="Madagascar"
          cargo="Creativa de la creatividad"
          empresa="Creatividad S.A."
          testimonio="Me gusta la creatividad y crear cosas creativas. ¡Gracias por todo!"
        />
      </div>
    </div>
  );
}

export default App;
