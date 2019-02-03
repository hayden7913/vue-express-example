/**
 * @jest-environment node
 */
import axios from 'axios';

const url = 'http://localhost:3000';

test('hello', async () => {
  const res = await axios.get(url);
  console.log(res.data);
  expect(true).toBe(true);
});
