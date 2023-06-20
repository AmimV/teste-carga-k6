export const options = {
    thresholds: {
      http_req_failed: ['rate<0.50'],
      http_req_duration: ['p(90)<5000'],
    },
    stages: [
      { duration: '10s', target: 2 },
    ],
  };
  