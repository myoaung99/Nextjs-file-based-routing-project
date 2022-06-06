import { useRouter } from "next/router";
import EventList from "./../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../helper/api-util";

const Events = (props) => {
  const { events } = props;
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

export const getStaticProps = async () => {
  const allEvents = await getAllEvents();
  return { props: { events: allEvents }, revalidate: 1800 };
};

export default Events;
