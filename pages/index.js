import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helper/api-util";

const HomePage = (props) => {
  const { featuredEvents } = props;
  console.log(featuredEvents);

  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getFeaturedEvents();
  return {
    revalidate: 1800,
    props: {
      featuredEvents: events,
    },
  };
};

export default HomePage;
