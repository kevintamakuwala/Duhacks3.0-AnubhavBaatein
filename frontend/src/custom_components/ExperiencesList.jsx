import React from "react";
import { JobCard } from "./JobCard";

function ExperiencesList({experiences}) {

  const experiencesCards = experiences.map((experience, index) => {
    return <JobCard key={index} jobobj={experience} />;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {experiencesCards}
    </div>
  );
}

export default ExperiencesList;