import React , {useState , useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  // state varaibel for items in array/object
  const[planeteer, setPlaneteer]= useState([])
  // state variabel for search 
  const[search , setSearch]=useState("")

  useEffect(() => {
    fetch('http://localhost:8003/planeteers')
    .then((res) => res.json())
    .then((planeteer) => setPlaneteer(planeteer))
  } , [])

  // new array for the search pass down to Planeteers Container 
  const displayedPlaneteers = planeteer.filter((planeteer) => {
    return planeteer.name.toLowerCase().includes(search.toLowerCase())
  })

  // 
  return (
    <div>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <RandomButton />
      <PlaneteersContainer search={search} displayedPlaneteers={displayedPlaneteers} />
    </div>
  );
}

export default App;
