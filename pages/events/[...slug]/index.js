import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../data/dummy-data";
import EventList from "../../../components/events/event-list";

const FilteredEvents = () => {
  const router = useRouter();
  const slug = router.query.slug;

  if (!slug) {
    return <p>Loading...</p>;
  }

  const filteredYear = slug[0];
  const filteredMonth = slug[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12 ||
    slug.length > 2
  ) {
    return <p>Invalid filters. Please correct your filters.</p>;
  }

  const filteredEvent = getFilteredEvents({ year: numYear, month: numMonth });

  if (filteredEvent && filteredEvent.length === 0) {
    return <p>There is no event.</p>;
  }

  return (
    <div>
      <EventList items={filteredEvent} />
    </div>
  );
};

export default FilteredEvents;
