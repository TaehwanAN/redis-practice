import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
  // include HASH
  await client.hSet(
    'car',
    {
      color: 'red',
      year: 1950,
      // engine: { cylinders: 8},
      // owner: null || '', // Redis -> null.toString() --> 문제발생생
      // service: undefined || ''
    }
  );
  const car = await client.hGetAll('car'); 
  // const car = await client.hGetAll('car#123456789'); // 만약 해당되는 키를 발견하지 못한 경우, "{}"이 반환됨
  // if(!car){ // car: [Object: null prototype] 으로 false가 아니다
  //   console.log('Car Not Found :: ' + car)
  //   return;
  // } 
  
  if(Object.keys(car).length === 0){
    console.log('Car Not Found :: ',car) 
    return;
  }

  console.log(car)
};
run();
