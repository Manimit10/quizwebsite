const myQuestions = [
    { //html questions 
      question: "What’s the name of the main international standards body that publishes HTML specifications?",
      answers: {
        a: "XHTML",
        b: "World Wide Web Consortium",
        c: "Internet For All"
      },
      correctAnswer: "b",
      category: "html",
      type: "radio",
      counter: 1
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c",
      category: "html",
      type: "radio",
      counter: 2
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d",
      category: "html",
      type: "radio",
      counter: 3
    },
    {
        question: "What type of information should you avoid including on your Web site?",
        answers: {
          a: "Links to sites of interest",
          b: "Private personal information",
          c: "Work and academic experience"
        },
        correctAnswer: "b",
        category: "html",
        type: "dropdown",
        counter: 4
      },
      {
        question: "Which of the following web elements should you know about before building your web site?",
        answers: {
          a: "The web audience",
          b: "The operating system of your visitor",
          c: "Each consideration should determine your web design choices"
        },
        correctAnswer: "a",
        category: "html",
        type: "radio",
        counter: 5
      },
      {
        question: "What does an HTML tag do?",
        answers: {
          a: "It specifies formatting and layout instructions for your web page.",
          b: "It determines the organizational structure of your Web site.",
          c: "It hides programming instructions from view."
        },
        correctAnswer: "a",
        category: "html",
        type: "dropdown",
        counter: 6
      },
      {
        question: "Which of the following is correct to change font face in Web Page",
        answers: {
          a: "<font = \"font name\"> … </font>",
          b: "<font name = \"font name\"> … </font>",
          c: "<font face = \"font name\"> … </font>"
        },
        correctAnswer: "c",
        category: "html",
        type: "radio",
        counter: 7
      },
      {
        question: "Which of the following is incorrect regarding Logical styles?",
        answers: {
          a: "Code looks like teletype",
          b: "Keyboard looks like teletype",
          c: "Variable looks like teletype"
        },
        correctAnswer: "c",
        category: "html",
        type: "dropdown",
        counter: 8
      }, 
      {
        question: "The software that can read and render HTML documents is",
        answers: {
          a: "Compiler",
          b: "Browser",
          c: "Server"
        },
        correctAnswer: "b",
        category: "html",
        type: "radio",
        counter: 9
      },
      {
        question: "A webpage displays a picture. What tag was used to display that picture?",
        answers: {
          a: "image",
          b: "src",
          c: "img"
        },
        correctAnswer: "c",
        category: "html",
        type: "dropdown",
        counter: 10
      },//start of CSS questions
      {
        question: "Which is the correct CSS syntax?",
        answers: {
          a: "body {color: black}",
          b: "{body;color:black}",
          c: "{body;color:black}"
        },
        correctAnswer: "a",
        category: "CSS",
        type: "dropdown",
        counter: 1
      },
      {
        question: "Which property is used to change the background color?",
        answers: {
          a: "bgcolor:",
          b: "background-color:",
          c: "color:"
        },
        correctAnswer: "b",
        category: "CSS",
        type: "radio",
        counter: 2
      },
      {
        question: "Which CSS property controls the text size?",
        answers: {
          a: "font-size",
          b: "font-style",
          c: "text-style"
        },
        correctAnswer: "a",
        category: "CSS",
        type: "dropdown",
        counter: 3
      },
      {
        question: "How do you make each word in a text start with a capital letter?",
        answers: {
          a: "You can't do that with CSS",
          b: "text-transform:capitalize",
          c: "text-transform:uppercase"
        },
        correctAnswer: "b",
        category: "CSS",
        type: "dropdown",
        counter: 4
      },
      {
        question: "How do you make a list that lists its items with squares?",
        answers: {
          a: "list-style-type: square",
          b: "list-type: square",
          c: "type: square"
        },
        correctAnswer: "a",
        category: "CSS",
        type: "radio",
        counter: 5
      },//Start of javaScript Questions
      {
        question: "What are variables used for in JavaScript Programs?",
        answers: {
          a: "Storing numbers, dates, or other values",
          b: "Causing high-school algebra flashbacks",
          c: "Varying randomly"
        },
        correctAnswer: "a",
        category: "js",
        type: "radio",
        counter: 1
      },
      {
        question: "Which of the following are capabilities of functions in JavaScript?",
        answers: {
          a: "Return a value",
          b: "Accept parameters and Return a value",
          c: "Accept parameters"
        },
        correctAnswer: "c",
        category: "js",
        type: "radio",
        counter: 2
      },
      {
        question: " Which of the following is not a valid JavaScript variable name?",
        answers: {
          a: "2names",
          b: "_first_and_last_names",
          c: "FirstAndLast"
        },
        correctAnswer: "a",
        category: "js",
        type: "radio",
        counter: 3
      },
      {
        question: "How does JavaScript store dates in a date object?",
        answers: {
          a: "The number of milliseconds since January 1st, 1970",
          b: "The number of days since January 1st, 1900",
          c: "The number of seconds since Netscape's public stock offering."
        },
        correctAnswer: "a",
        category: "js",
        type: "radio",
        counter: 4
      },
      {
        question: "What is the correct JavaScript syntax to write \"Hello World\"?",
        answers: {
          a: "System.out.println(\"Hello World\")",
          b: "response.write(\"Hello World\")",
          c: "document.write(\"Hello World\")"
        },
        correctAnswer: "c",
        category: "js",
        type: "radio",
        counter: 5
      },

  ];// End of Questions

  
 


  