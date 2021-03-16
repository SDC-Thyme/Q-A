import axios from 'axios';


axios.post('http://csvlint.io/package.json', {
  urls: ['../xaa-copy.csv'],
  schema: '../validationSchema.json'
}).then((data) => {console.log(data.package)})