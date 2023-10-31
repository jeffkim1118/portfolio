import Project from "./project";

export default function Portfolio() {
  return (
    <div name="portfolio">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          Portfolio section
          <Project/>
          <Project/>
          <Project/>
        </div>
      </div>
    </div>
  );
}
