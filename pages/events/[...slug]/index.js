import Head from "next/head";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import EventList from "../../../components/events/event-list";
import useSWR from "swr";

const FilteredEvents = () => {
  const router = useRouter();
  const [allEvents, setAllEvents] = useState();
  // fetch data

  const filterDate = router.query.slug;

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://nextjs-course-e05eb-default-rtdb.firebaseio.com/events.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const transformedEvents = [];

      for (const key in data) {
        transformedEvents.push({ id: key, ...data[key] });
      }
      setAllEvents(transformedEvents);
    }
  }, [data]);

  let pageHead;

  if (error) {
    return (
      <>
        <p>Something went wrong.</p>
      </>
    );
  }

  // event အကုန်
  if (!allEvents || !filterDate) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  // router.query က second re-render မှရမှာ
  // အဲ့တာကြောင့် allEvents ရှိပြီးမှ စစ်တဲ့ flow ကိုရေးထားတာပါ
  // all event က useEffect နဲ့ second re-evaluate ကြမှ ထည့်ထားတာပါ
  const filteredYear = filterDate[0];
  const filteredMonth = filterDate[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  pageHead = (
    <Head>
      <title>Filtered Events</title>
      <meta
        title="description"
        content={`Filtered events that is at ${numMonth}/${numYear}`}
      />
    </Head>
  );

  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <>
        {pageHead}
        <p>Invalid filter. Please adjust your values!</p>
      </>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHead}
        <p>There is no event</p>
      </>
    );
  }

  return (
    <div>
      {pageHead}
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
