import "./App.css";
import { useFetch } from "./hooks";

const url = "https://api.example.com/data";
//User ejemplo
//const userUrl = "https://api.example.com/user";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const { data, loading, error } = useFetch<Data>(url);
  //const { data: dataUser, loading: loadingUser, error: errorUser } = useFetch<{ name: string }>(url);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>UPS! hay un error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
