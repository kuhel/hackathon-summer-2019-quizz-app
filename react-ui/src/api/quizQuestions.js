var quizQuestions = [
  {
      question: "Which is a valid construction for showing a message 5s after a script has loaded?",
      answers: [
          {
              type: 0,
              content: "setTimeout(function() { alert('Hello') }, 5)"
          },
          {
              type: 0,
              content: "setTimeout('alert('Hello')', 5000);"
          },
          {
              type: 0,
              content: "sleep(5000); alert('Hello');"
          },
          {
              type: 1,
              content: "setTimeout(function() { alert('Hello') }, 5000)"
          }
      ]
  },
  {
      question: "Can you pass a function as an argument to another function?",
      answers: [
          {
              type: 0,
              content: "In some cases NO"
          },
          {
              type: 0,
              content: "No"
          },
          {
              type: 1,
              content: "Yes"
          },
          {
              type: 0,
              content: "In some cases YES"
          }
      ]
  },
  {
      question: "What allows assigning a set of callbacks on a desired event?",
      answers: [
          {
              type: 0,
              content: "Element.prototype.onclick"
          },
          {
              type: 0,
              content: "Element.events"
          },
          {
              type: 0,
              content: "Element.addEventCaller"
          },
          {
              type: 1,
              content: "Element.addEventListener"
          }
      ]
  },
  {
      question: "Which of the following methods removes the last element from an array and returns that element?",
      answers: [
          {
              type: 0,
              content: "last()"
          },
          {
              type: 0,
              content: "get()"
          },
          {
              type: 1,
              content: "pop()"
          },
          {
              type: 0,
              content: "None of this"
          },
      ]
  },
  {
      question: "What is the function of Array object that runs through each element of the array?",
      answers: [
          {
              type: 1,
              content: "forEach()"
          },
          {
              type: 0,
              content: "every()"
          },
          {
              type: 0,
              content: "concat()"
          },
          {
              type: 0,
              content: "filter()"
          }
      ]
  }
];

export default quizQuestions;
