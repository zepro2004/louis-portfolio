import notesAppImage from "../assets/images/projects/NotesApp.png";
import eventsWebsiteImage from "../assets/images/projects/EventsWebsite.png";
import palindromeCheckerImage from "../assets/images/projects/PalindromeChecker.png";
import decimalConverterImage from "../assets/images/projects/DecimalConverter.png";
import telephoneValidatorImage from "../assets/images/projects/TelephoneValidator.png";
import romanConverterImage from "../assets/images/projects/RomanConverter.png";

const projects = [
  {
    title: "Notes App",
    description:
      "Stores Notes and ToDos. Uses Java Swing for the frontend and MySQL for the backend. Maven is used as the build tool.",
    date: "2025-04-15",
    image: notesAppImage,
    source: "https://github.com/zepro2004/Notes-App",
    caption: "Fig. Notes App",
    technologies: "Java, Maven, and SQL.",
  },

  {
    title: "Events Management Website",
    description:
      "A dynamic website to manage events. Attendees can RSVP to events, whereas admins can create and delete events.",
    date: "2025-03-20",
    image: eventsWebsiteImage,
    source: "https://github.com/zepro2004/Event-Attendees-Management-Website",
    caption: "Fig. Events Management Website",
    technologies: "JavaScript, PHP, SQL, HTML, CSS",
  },

  {
    title: "Palindrome Checker",
    description:
      "Checks if a word or sentence is a palindrome. It ignores special characters and spaces.",
    date: "2024-11-25",
    image: palindromeCheckerImage,
    source: "https://jsfiddle.net/bcbzepro/bhLc2a3p/1/",
    caption: "Fig. palindrome checker",
    technologies: "JavaScript, HTML, CSS",
  },
  {
    title: "Decimal Converter",
    description: "Converts numbers from decimal to binary.",
    date: "2024-12-13",
    image: decimalConverterImage,
    source: "https://jsfiddle.net/bcbzepro/o53hcbLn/1/",
    caption: "Fig. Decimal to binary converter",
    technologies: "JavaScript, HTML, CSS",
  },
  {
    title: "Telephone Validator",
    description:
      "Checks that the telephone number is in the correct format. It follows the north american numbering format.",
    date: "2025-01-15",
    image: telephoneValidatorImage,
    source: "https://jsfiddle.net/bcbzepro/9suLda7r/1/",
    caption: "Fig. Telephone number validator",
    technologies: "JavaScript, HTML, CSS",
  },
  {
    title: "Roman Numeral Converter",
    description:
      "Converts numbers to Roman numerals. You input any number from 1 to 3999 and it will convert to a roman numeral.",
    date: "2024-09-25",
    image: romanConverterImage,
    source: "https://jsfiddle.net/bcbzepro/vm39fja0/1/",
    caption: "Fig. Roman numeral converter",
    technologies: "JavaScript, HTML, CSS",
  },
];

export default projects;
