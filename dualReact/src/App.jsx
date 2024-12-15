import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <nav class="navbar">
          <div>
            <img src="./assets/react.svg" alt="logo" class="logo" />
          </div>
          <div>
            <ul class="navbar-list">
              <li class="navbar-list-items">Home</li>
              <li class="navbar-list-items">Jobs</li>
              <li class="navbar-list-items">Add Jobs</li>
            </ul>
          </div>
        </nav>
      </section>
      <hr />
      <section>
        <div>
          <h1> Become a React Dev</h1>
          <h3> find the react job</h3>
        </div>
      </section>
      <section>
        <div class="user-type">
          <h2>For Developer</h2>
          <h3>browse </h3>
          <button class="btn"> browse jobs</button>
        </div>
      </section>
      <section>
        <div>
          <h2> Recent Jobs</h2>
          <div class="job-card">
            <span>Full Time</span>
            <h4>Senior React Developer</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              reprehenderit exercitationem sunt nulla perspiciatis praesentium
              voluptatibus facere quos perferendis quasi ab molestias laudantium
              nostrum iste, at velit. Doloremque, nostrum maiores.
            </p>
            <em>More</em>

            <strong> 70k-80k</strong>
            <div>
              <p>Boston</p>
              <button class="btn">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
