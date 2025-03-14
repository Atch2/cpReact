import "./App.css";
import { AppForm, Button, ColorRed } from "./components";
import { GlobalProvider } from "./context/global.provider";

function App() {
  const submit = () => {
    console.log("submited");
  };

  const handleClick = () => {
    console.log("uy me tocaron");
  };

  const dimeHola = () => {
    alert("hola !!");
  };

  return (
    <GlobalProvider>
      <ColorRed>
        <Button parentMethod={dimeHola}>My Boton Rojo</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>My Boton normal</Button>

      <AppForm>
        <button type="submit" onClick={submit}></button>
      </AppForm>
    </GlobalProvider>
  );
}

export default App;
