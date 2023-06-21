import http from 'k6/http';
import { sleep, check } from 'k6';

export default function addObjectRequest() {
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const payload = JSON.stringify({
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      CPUModel: "Intel Core i9",
      HardDiskSize: "1 TB"
    }
  });

  const resGet = http.post('https://api.restful-api.dev/objects', payload, params);

  check(resGet, {
    'status is 200': (r) => r.status === 200,
    'máximo de duração': (r) => r.timings.duration < 3000,
  });

  sleep(1);
}
