import React from "react";
import EventList from "../components/EventList";
import Map from "../components/Map";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <EventList />
      <div className="w-3/4 mx-auto mt-10">
        <Map />
      </div>
    </div>
  );
};

export default Home;
