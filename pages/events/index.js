import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "./../../data/dummy-data";
import EventList from "./../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const Events = () => {
  const events = getAllEvents();
  const router = useRouter();

  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={events}></EventList>
    </>
  );
};

export default Events;
