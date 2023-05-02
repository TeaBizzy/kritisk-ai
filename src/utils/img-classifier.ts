import * as tm from '@teachablemachine/image';

const URL = 'https://teachablemachine.withgoogle.com/models/TjwAEeUqe/'
const modelURL = URL + 'model.json'
const metadataURL = URL + 'metadata.json'

export async function predict(img:any) {
  const model = await tm.load(modelURL, metadataURL); // Load the AI model.

  // Evaluate the image against the model.
  return model.predict(img, false)
    .then((prediction:any) => {
      // Round the prediciton values to whole numbers.
      return prediction.map((category: {className: '', probability: 0}) =>
        ({
          ...category,
          probability: Math.round(category.probability * 100)
        })
      )
    }).catch((err: Error) => {console.log(err)})
}





