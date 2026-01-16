import photo from "../assets/bg.jpg";

export default function About() {
  return (
    <section className="card about-card">
      <div className="about-left">
        <img
          src={photo}
          alt="Pavan Nagendla"
          className="profile-image"
        />
      </div>

      <div className="about-right">
        <h2>Pavan Nagendla</h2>
        <p>
          Senior Software Engineer with 4+ years of experience in full-stack development, specializing in Java, Spring Boot, Java script, UI/ UX design, REST API design for scalable web applications. Hands-on experience with Kafka for data streaming, MongoDB and SQL for data persistence, and AngularJS for modern Web development. Proficient in deploying cloud-native solutions on AWS and exploring Azure. Strong interest in retail systems and data-driven applications with Python integration for analytics. strong interest in data and ML engineering practices through implementation of Kafka-based pipelines, Redis caching, and support of data-intensive workflows.
        </p>
      </div>
    </section>
  );
}
