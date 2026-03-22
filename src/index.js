import axios from 'axios';
import dotenv from 'dotenv';
import { BePaid } from './bepaid.js';

dotenv.config();

const shopId = process.env.SHOP_ID;
const secretKey = process.env.SECRET_KEY;

if (!shopId || !secretKey) {
  console.error('Error: SHOP_ID and SECRET_KEY environment variables are required.');
  process.exit(1);
}

const bepaid = new BePaid(shopId, secretKey);




console.log('Environment variables loaded:', process.env.TEST);
console.log('Starting the report export process...');
