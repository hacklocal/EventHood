export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});

export const modEvent = (eventId, mods) => ({
  type: "MODIFY_EVENT",
  eventId,
  mods
});

export const loadEvents = events => ({
  type: "LOAD_EVENTS",
  events
});

export const loadRegions = query => ({
  type: "SET_REGIONS",
  query
});
