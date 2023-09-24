# Signaloid Take-home assignment, author: Grigorii Pika

## To run:
1. `npm install`
2. `npm start`

The deployed version of the application can be seen [here](https://signaloid-test.vercel.app/)

## Justifications:
### Only one route
Initially, I was planning to do 3 routes:
1. Add a new task
2. Detailed task view
3. Task history page

This would make total sense if there were any actions that the user could perform on the task (e.g. cancel, restart). However, with the limited time and "unactionable" tasks I decided to go for simplification and place everything on one page.

### Prop drilling
For bigger applications, it would make sense to use redux or any other state management solution. But for the sake of speed and simplicity, I chose to opt for prop drilling. If I had to scale this application that wouldn't be an option.

## I wish I had time for:
1. Easy-to-understand form validation messages (e.g. place a text below the "Add Task" button that specifies which fields have to be filled in)
2. Unit tests
