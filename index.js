import dotenv from 'dotenv';
dotenv.config(); 

import cowsay from 'cowsay';

const name = process.env.MY_NAME;
const campus = process.env.MY_CAMPUS;


console.log(cowsay.say({
    text: `Hello, I am ${name} from ${campus}`,
    e: "oO",
    T: "U "
  }));


