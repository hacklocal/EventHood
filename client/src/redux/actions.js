export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});

export const modEvent = (eventId, mods) => ({
  type: "MODIFY_EVENT",
  eventId,
  mods
});
