import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  console.log(loadedCoffees);

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="m-20">
      <h1 className="text-5xl text-center text-purple-600">
        Hot Hot Cold Coffee: {loadedCoffees.length}
      </h1>

      <div className="flex flex-row-reverse">
        <Link to={`/addCoffee/`}>
          <button className="btn btn-sm mt-8 mb-4">Add coffee</button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
