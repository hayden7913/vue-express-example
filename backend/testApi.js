const axios = require('axios');

const url = 'http://localhost:3000/environment';

axios({
  url,
  method: 'post',
  data: JSON.stringify({ message: 'success!' }),
})
  .then(() => process.exit());
