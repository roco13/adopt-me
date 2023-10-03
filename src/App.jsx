import { createRoot} from 'react-dom/client';
//import Pet from "./Pet";
import SearchParams from './SearchParams';


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet {"luna", "dog", 'havanese'}/> */}
      {/* <Pet name="luna" animal= "dog" breed= 'havanese' />
      <Pet name="Peper" animal= "cat" breed= 'cockatiel' />
      <Pet name="Doink" animal= "bird" breed= 'mixed' /> */}
      <SearchParams />
    </div>
  )
}
// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "dog",
//       breed: "havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     })
//   );
// };
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
