import "./SelectLanguage.css";

export default function SelectLanguage() {
  // const {Translate} = require('@google-cloud/translate').v2;
  // const { Translate } = require('@google-cloud/translate').v2; // Imports the Google Cloud client library
  // require('dotenv').config(); // Configure dotenv to load in the .env file

  const CREDENTIALS = JSON.parse(process.env.REACT_APP_CREDENTIALS);

  // const translate = new Translate(
  //   {
  //     credentials: CREDENTIALS,
  //     projectId: CREDENTIALS.project_id,
  //   },
  // );

// Instantiates a client
// const translate = new Translate({projectId});

// async function quickStart() {
//   // The text to translate
//   const text = 'Hello, world!';

//   // The target language
//   const target = 'ru';

//   // Translates some text into Russian
//   const [translation] = await translate.translate(text, target);
//   console.log(`Text: ${text}`);
//   console.log(`Translation: ${translation}`);
// }

  return <div className="box">{CREDENTIALS.project_id}====</div>;
}
