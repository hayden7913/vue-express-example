// heater control state

export default {
  state: {
    Air: true,
    Lamp: true,
    Heater: false,
  },
  levels: {
    Air: {
      start: 0,
      stop: 0,
    },
    Lamp: {
      start: 0,
      stop: 0,
      level: '66',
    },
    Heater: {
      start: 0,
      stop: 0,
      level: '77',
    },
  },
  limits: {
    Heater: {
      'HIGH-value': '36',
      'LOW-value': '32',
    },
  },
};
