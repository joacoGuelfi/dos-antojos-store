import "./style.css"
import Router from "./app/Router";
import CartProvider from "./app/cartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router />
      </CartProvider>
      <h1>Hola</h1>
    </div>
  );
}

export default App;
