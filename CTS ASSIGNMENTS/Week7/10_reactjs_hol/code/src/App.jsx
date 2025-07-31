import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const officeData = [
    {
      title: "Office Space , at Affordable Range",
      imgSrc: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
      name: "DBS",
      rent: 50000,
      address: "Chennai"
    },
    {
      title: "Furnished Co-Working Space",
      imgSrc: "https://images.unsplash.com/photo-1560448070-36573c7b99e5",
      name: "WeWork",
      rent: 62000,
      address: "Bangalore"
    },
    {
      title: "Executive Cabin Space",
      imgSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      name: "Regus",
      rent: 48000,
      address: "Hyderabad"
    },
    {
      title: "Spacious Work Bay with AC",
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      name: "SmartDesk",
      rent: 75000,
      address: "Mumbai"
    },
    {
      title: "Team Office with Conference Room",
      imgSrc: "https://images.unsplash.com/photo-1558002038-1055907df827",
      name: "91Springboard",
      rent: 68000,
      address: "Pune"
    },
    {
      title: "Affordable Workspace for Startups",
      imgSrc: "https://images.unsplash.com/photo-1591035897810-1e52948e60bc",
      name: "Innov8",
      rent: 54000,
      address: "Noida"
    },
    {
      title: "Modern Work Lounge",
      imgSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      name: "Awfis",
      rent: 63000,
      address: "Delhi"
    },
    {
      title: "Corporate Cabin Space",
      imgSrc: "https://images.unsplash.com/photo-1581093448793-519ccbcbf6b3",
      name: "WorkEZ",
      rent: 58000,
      address: "Kolkata"
    },
    {
      title: "Creative Space for Designers",
      imgSrc: "https://images.unsplash.com/photo-1616627982293-df2b7d167b8f",
      name: "SpaceMax",
      rent: 61000,
      address: "Ahmedabad"
    },
    {
      title: "Shared Office with Premium Facilities",
      imgSrc: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      name: "The Office Pass",
      rent: 70000,
      address: "Gurgaon"
    }
  ];

  return (
    <>
      {officeData.map((data, index) => (
        <Card key={index} item={data} />
      ))}
    </>
  );
}

export default App;
