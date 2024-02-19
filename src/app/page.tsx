'use client'

import { useEffect, useState } from "react";

export type Stations = {
  id: string;
  country: string;
  location: string;
  station: string;
  km: number;
}

export default function Home() {

  const [ stationsData, setStationsData ] = useState<Stations[] | null>(null)
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/stations');
        const data = await response.json();
        setStationsData(data)
      } catch (error) {
        console.error(error);
      }
    };
    getData();

  }, []);
  
  console.log('render', stationsData)

  return (
    <div className="flex flex-col gap-10 items-center">
    {stationsData?.map((item) => (
      <div key={item.id} className="">
          <p>Country: {item.country}</p>
          <p>Location: {item.location}</p>
          <p>Station: {item.station}</p>
          <p>Km/Max: {item.km}</p>
        </div>
    ))}
    </div>
  );
}
