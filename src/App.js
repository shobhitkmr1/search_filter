import "./App.css";
import { useState } from "react";
import JSONFILE from "./Testing_Data.json";
function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="main">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      {JSONFILE.filter((val) => {
        if (searchValue === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
