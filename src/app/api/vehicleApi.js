import axios from 'axios';
import { generateStaticParams } from '../service/vehicleService';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getMakes = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/vehicles/GetMakesForVehicleType/car?format=json`,
    );
    console.log(response);
    // setMakes(response.data.Results);
    return response.data.Results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getYears = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  const yearList = Array.from(
    { length: currentYear - 2014 },
    (_, i) => 2015 + i,
  );
  return yearList;
  //   setYears(yearList);
};

export const getCarsByMakeIdAndYear = async (makeId, year) => {
  const response = await axios.get(
    baseUrl + generateStaticParams(makeId, year),
  );
  console.log(response.data.Results);
  return response.data.Results;
};
