import "./App.css";
import { PrimeReactProvider } from "primereact/api";

import LoginPage from "./components/RegisterPage";

function App() {
  return (
    <PrimeReactProvider>
      <LoginPage />
    </PrimeReactProvider>
  );
}

export default App;
