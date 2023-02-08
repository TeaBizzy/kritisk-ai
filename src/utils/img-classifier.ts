import * as tm from '@teachablemachine/image';

let model: any = null

export async function initModel() {
  const URL = 'https://teachablemachine.withgoogle.com/models/TjwAEeUqe/'
  const modelURL = URL + 'model.json'
  const metadataURL = URL + 'metadata.json'

  model = await tm.load(modelURL, metadataURL);
  console.log(model);
}

initModel()

export function predict(img:any) {
  return model.predict(img, false)
    .then((prediction:any) => {
      for (const value of prediction) {
        value.probability = Math.round(value.probability * 100)
      }
      return prediction
    })
}





