import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  // Equivalent to:
  // const locationHook = useState("");
  // const location = locationHook[0];
  // const setLocation = locationHook[1];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
