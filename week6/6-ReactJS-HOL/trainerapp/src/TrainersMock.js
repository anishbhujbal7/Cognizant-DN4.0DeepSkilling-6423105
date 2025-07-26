import Trainer from "./Trainer";

const trainers = [
  new Trainer(
    "T101",
    "Anish Bhujbal",
    "anish@example.com",
    "9876543210",
    "Full Stack",
    ["React", "Node.js", "MongoDB"]
  ),
  new Trainer(
    "T102",
    "Priya Mehra",
    "priya@example.com",
    "9123456789",
    "Frontend",
    ["HTML", "CSS", "JavaScript", "React"]
  ),
  new Trainer(
    "T103",
    "Ravi Kumar",
    "ravi@example.com",
    "9988776655",
    "Backend",
    ["Java", "Spring Boot", "MySQL"]
  ),
  new Trainer(
    "T104",
    "Sneha Das",
    "sneha@example.com",
    "9001122334",
    "Data Science",
    ["Python", "Pandas", "Machine Learning"]
  ),
  new Trainer(
    "T105",
    "Arjun Singh",
    "arjun@example.com",
    "9876012345",
    "Cloud",
    ["AWS", "Docker", "Kubernetes"]
  )
];

export default trainers;