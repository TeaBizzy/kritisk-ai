import * as tf from '@tensorflow/tfjs';
import * as tm from '@teachablemachine/image';
import { mod } from '@tensorflow/tfjs';

const URL = 'https://teachablemachine.withgoogle.com/models/TjwAEeUqe/'
const modelURL = URL + 'model.json'
const metadataURL = URL + 'metadata.json'


export async function predict(img:any) {
  const model = await tm.load(modelURL, metadataURL);
  return model.predict(img, false)
    .then((prediction:any) => {
      console.log('wtf');
      for (const value of prediction) {
        value.probability = Math.round(value.probability * 100)
      }
      return prediction
    }).catch((err:any) => {console.log(err)})
}





