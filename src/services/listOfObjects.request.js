import http from 'k6/http';
import { sleep, check } from 'k6';

export default function listOfObjectRequest() {
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const resGet = http.get('https://api.restful-api.dev/objects', params);

  check(resGet, {
    'status is 200': (r) => r.status === 200,
    '13 Objetos no Array': (r) => r.json().length === 13,
    'máximo de duração': (r) => r.timings.duration < 3000,
  });

  sleep(1);
}
