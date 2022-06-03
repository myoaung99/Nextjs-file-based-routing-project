import React from "react";
import { useRouter } from "next/router";

const FilteredEvents = () => {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(slug);
  return (
    <div>
      <h1>This is filtered events page.</h1>
    </div>
  );
};

export default FilteredEvents;
