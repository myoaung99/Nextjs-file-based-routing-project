import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helper/api-util";

const HomePage = (props) => {
  const { featuredEvents } = props;
  console.log(featuredEvents);

  return (
    <>
      <Head>
        <title>Events For You</title>
        <meta
          title="description"
          content="Events that will allow you to evolve..."
        />
      </Head>
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
