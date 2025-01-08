"use client";

import React, { useEffect, useState } from "react";
import { getCarsByMakeIdAndYear } from "@/app/api/vehicleApi";

const ResultPage = ({ params }) => {
  const [list, setList] = useState([]);
  const { makeId, year } = React.use(params);

  useEffect(() => {
    const fetchData = async () => {
      console.log(params);

      const carList = await getCarsByMakeIdAndYear(makeId, year);
      console.log(carList);
      setList(carList);
    };
    fetchData();
  }, [makeId, year]);

  return (
    <div>
      {list.length > 0 ? (
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {list.map((car, index) => (
            <li
              key={index}
              className="border border-gray-300 p-4 rounded-md shadow-md hover:bg-gray-100"
            >
              <p>
                <strong>Make name:</strong> {car.Make_Name}
              </p>
              <p>
                <strong>Model name:</strong>
                {car.Model_Name}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">
          No models found for the selected make and year.
        </p>
      )}
    </div>
  );
};

export default ResultPage;
