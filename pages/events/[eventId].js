import React from "react";
import { useRouter } from "next/router";

const EventDetail = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  return (
    <div>
      <h1>This is event detail page.</h1>
      <p>{eventId}</p>
    </div>
  );
};

export default EventDetail;
