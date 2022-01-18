import { render } from "react-dom"; /*para trabalhar com o react-dom*/
import { App } from "./App";

render(
  <App />,
  document.getElementById("root")
); /*O primeiro parâmetro é o que deseja renderizar 
e o segundo parâetmro dentro de qual elemento é para rendreizar.*/
