import React, { useState, useEffect } from "react";

import VolunteerEvents from "./VolunteerEvents";

function Home({ volunteer }) {
  const [volunteerEvents, setVolunteerEvents] = useState([]);
  const [signups, setSignups] = useState([]);

  useEffect(() => {
    fetch("/signups")
      .then((r) => r.json())
      .then((signups) => setSignups(signups));
  }, []);

  useEffect(() => {
    if (volunteer?.id) {
      fetch(`/volunteers/${volunteer.id}`)
        .then((r) => r.json())
        .then((volunteer) => setVolunteerEvents(volunteer.events));
    }
  }, [volunteer?.id]);

  console.log("volunteer events", volunteerEvents);

  function handleDeleteSignup(id) {
    const updatedsignups = signups.filter((signup) => signup.id !== id);
    setSignups(updatedsignups);
  }

  return (
    <div>
      <p>
        Are you ready to volunteer? The need for volunteers has never been
        greater, and the time to get involved has never been better. Finding the
        opportunity that best suits your skills, availability, and expectations
        can make all the difference in your experience. Volunteering can open
        your mind, your heart, your hands to helping your community and building
        a better future for all of us. Help out once, help out once a week. Be a
        part of a great community and a tremendous state!
      </p>
      {volunteerEvents.map((event) => {
        return (
          <VolunteerEvents
            event={event}
            key={event.id}
            volunteer={volunteer}
            handleDeleteSignup={handleDeleteSignup}
          />
        );
      })}
    </div>
  );
}

// if(volunteer) {
//   return (
//     <div>
//       <h2>Hello, {volunteer.first_name}!</h2>
//       {volunteer ? <h3>EventList:</h3> : <h3>No Events Added</h3> }
//       {renderEvents()}
//     </div>
//   );
// } else {
//   return null;
// }
// }

export default Home;
