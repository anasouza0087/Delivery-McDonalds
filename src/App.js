import Header from "./componentes/Header";
import ListOption from "./componentes/ListOption";
import TotalPedido from "./componentes/TotalPedido";

import './styles.css/app.css'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <ListOption>
          <TotalPedido />
        </ListOption>
      </main>
    </div>
  );
}

export default App;
