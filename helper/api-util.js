export const getAllEvents = async () => {
  return fetch(
    "https://nextjs-course-e05eb-default-rtdb.firebaseio.com/events.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const transformedEvents = [];
      for (const key in data) {
        transformedEvents.push({ id: key, ...data[key] });
      }

      return transformedEvents;
    });
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter((event) => event.isFeatured);
  return featuredEvents;
};

export const getEventDetail = async (id) => {
  const allEvents = await getAllEvents();
  const eventDetail = allEvents.filter((event) => event.id === id);
  return eventDetail[0];
};

export const getFilteredEvents = async (dateFilter) => {
  const allEvents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
