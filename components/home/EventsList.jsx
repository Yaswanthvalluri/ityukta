import { EventCard } from "./EventCard";
import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Title from "../../elements/Title.tsx";

function EventsList({ techEventsData, nonTechEventsData }) {
  return (
    <Box mx="auto" p={4} mt={8} maxW="1200px">
      <Title title="Technical Events" />
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={8} mb={12} mt={8}>
        {techEventsData?.map((event) => (
          <EventCard
            key={event.id}
            eventName={event.Event_Name}
            eventDescription={event.Event_Description}
            eventImage={event.Event_Image}
          />
        ))}
      </SimpleGrid>
      <Title title="Non-Technical Events" />
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={8} mt={8}>
        {nonTechEventsData?.map((event) => (
          <EventCard
            key={event.id}
            eventName={event.Event_Name}
            eventDescription={event.Event_Description}
            eventImage={event.Event_Image}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default EventsList;
