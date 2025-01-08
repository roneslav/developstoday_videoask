'use client';
import React from 'react';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getMakes, getYears } from '../api/vehicleApi';
import Loader from '../loader/Loader';

export default function HomePage() {
  const [makes, setMakes] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [error, setError] = useState(null);

  const getMakesData = async () => {
    try {
      const data = await getMakes();
      setMakes(data);
    } catch (error) {
      setError('Failed to load vehicle makes. Please try again later.', error);
    }
  };

  const getYearsData = () => {
    try {
      const data = getYears();
      setYears(data);
    } catch (error) {
      setError('Failed to load model year. Please try again later.', error);
    }
  };

  useEffect(() => {
    getMakesData();
    getYearsData();
  }, []);

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }

  return makes.length > 0 ? (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Find your Vehicle</h1>
      <div className="mb-4">
        <label htmlFor="make" className="block text-lg mb-2">
          Select vehicle make:
        </label>
        <select
          id="make"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={selectedMake}
          onChange={e => setSelectedMake(e.target.value)}
        >
          <option value="">Select a make</option>
          {makes.map(make => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="year" className="block text-lg mb-2">
          Select model year for vehicle:
        </label>
        <select
          id="year"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          <option value="">Select a year</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <p className="text-lg">
          <strong>Chosen vehicle name:</strong> {selectedMake || 'None'}
        </p>
        <p className="text-lg">
          <strong>Chosen model year:</strong> {selectedYear || 'None'}
        </p>
      </div>
      <Link
        href={
          selectedMake && selectedYear
            ? `/result/${selectedMake}/${selectedYear}`
            : ''
        }
      >
        <Button
          isDisabled={!selectedMake || !selectedYear}
          className={`px-4 py-2 mt-2 rounded-md text-white ${
            selectedMake && selectedYear
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </Button>
      </Link>
    </div>
  ) : (
    <Loader />
  );
}
