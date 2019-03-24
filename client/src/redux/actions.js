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

export const resetSelectedRegion = () => ({
  type: "RESET_REGION"
});

export const setSelectedRegion = region => ({
  type: "SET_REGION",
  region
});

export const loadUsers = userList => ({
  type: "LOAD_USERS",
  userList
});

export const setUser = user => ({
  type: "SET_USER",
  user
});
