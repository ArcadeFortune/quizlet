# Languagequiz for the Andeo Coding Contest

This quiz is my solution to the coding contest from Andeo
The goal is, to translate the given english text into the language you selected.
Most of the translated text is already filled, your only job is to complete the sentence.

You can select tons of languages, whichever you prefer.
The amount of gaps to fill is customizable.
And the amount of text to translate is also customizable.


## Tips & Tricks

You will not know where a mistake is made.
But you will be able to see the solution by accessing the console :)

## How It Works

1. Fetches an [API](https://api.chucknorris.io/) for random sentence(s), it will fetch more, depending on what you selected in the main menu.
2. Translates the random sentence(s) with the [MyMemory API](https://mymemory.translated.net/), with the language you have selected.
3. It will then render the original sentence, and the translated sentences (with gaps) beneath it.
4. There is a button to check, whether your answers are correct or not.

## More Important Information

Because the [API](https://api.chucknorris.io/) sometimes gives inappropriate sentences, I make sure to check each sentences to not contain [bad words](https://github.com/coffee-and-fun/google-profanity-words/blob/main/data/en.txt). I cannot test every single sentence, so there might still be a very small possibility for inappropriate sentences to appear, be warned.

## Run It On Your Own

1. Get the code
```
git clone https://github.com/arcadefortune/quizlet
```
2. Change directory
```
cd todolist
```
3. Install dependecies
```
npm i
```
3. Run the code
```
npm start
```
