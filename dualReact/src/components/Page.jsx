import Navbar from "./Navbar";
import Card from "./Card";
import JobCard from "./JobCard";
import HeroSection from "./HeroSection";

export default function Page() {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <HeroSection></HeroSection>

        <div className="card-container">
          <Card></Card>
          <Card></Card>
        </div>
        <h2> Recent Jobs</h2>
        <div className="job-card-container">
          <JobCard></JobCard>
          <JobCard></JobCard>
        </div>
      </section>
    </>
  );
}
