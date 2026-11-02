const subjects = ["Física", "Matemática", "Português", "Biologia", "Química"];

export default function Home() {
  return (
    <ul>
      {subjects.map((subject) => (
        <li key={subject}>{subject}</li>
      ))}
    </ul>
  );
}
