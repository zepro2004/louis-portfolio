import neonfetchImage from "../assets/images/projects/neonfetch.png";
import notesAppImage from "../assets/images/projects/NotesApp.png";
import eventsWebsiteImage from "../assets/images/projects/EventsWebsite.png";

const projects = [
  {
    title:"NeonFetch",
    description:
      "A modern desktop downloader built with Tauri, React, and yt-dlp. Download videos from YouTube and 1000+ other platforms with a beautiful, easy-to-use interface.",
    date: "2026-01-31",
    image: neonfetchImage,
    source: "https://github.com/zepro2004/yt-dlp-gui",
    caption: "Fig. NeonFetch",
    technologies: "React, Rust, Tauri",
  },
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
];

export default projects;
