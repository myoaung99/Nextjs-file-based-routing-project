import Head from "next/head";
import EventSummary from "./../../components/event-detail/event-summary";
import EventLogistics from "./../../components/event-detail/event-logistics";
import EventContent from "./../../components/event-detail/event-content";
import { getEventDetail, getFeaturedEvents } from "../../helper/api-util";

const EventDetail = (props) => {
  const { event } = props;

  if (!event) {
    return <p>No event found!!</p>;
  }

  return (
    <>
      <title>Event Detail</title>
      <meta
        title="description"
        content="Event that you might be interested..."
      />
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();

  console.log(allEvents);

  const paths = allEvents.map((event) => {
    return {
      params: {
        eventId: event.id,
      },
    };
  });

  console.log(paths);
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { eventId } = context.params;
  console.log(eventId);
  const eventDetail = await getEventDetail(eventId);
  return {
    revalidate: 1800,
    props: {
      event: eventDetail,
    },
  };
};

export default EventDetail;
