import React from "react";
import { Tour} from "@/types/tour";
import { url } from "@/utils/constants";


const fetchTours = async ()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(url);
    const data:Tour[] = await response.json();
    return data;
}

async function ToursPage() {
  const data = await fetchTours();
  return (
    <div>
      <h1 className="text-3xl mb-4">Tours</h1>
      {data.map((tour) => {
        return <h2 key={tour.id}>{tour.name}</h2>;
      })}
    </div>
  );
}

export default ToursPage;
