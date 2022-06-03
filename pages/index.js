import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
};

export default HomePage;
