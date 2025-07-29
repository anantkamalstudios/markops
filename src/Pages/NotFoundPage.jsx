import React, { useEffect } from "react";
import "../Components/NotFoundPage.css";
const NotFoundPage = () => {
  useEffect(() => {
    const starsContainer = document.getElementById("stars");

    starsContainer.innerHTML = "";

    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const size = Math.random() * 3;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = 1 + Math.random() * 5;
      const delay = Math.random() * 5;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.animationDelay = `${delay}s`;
      star.style.setProperty("--duration", `${duration}s`);

      starsContainer.appendChild(star);
    }

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
    };

    const parallaxEffect = (e) => {
      const planets = document.querySelectorAll(".planet");
      planets.forEach((planet) => {
        const speed = planet.getAttribute("data-speed") || 20;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        planet.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", parallaxEffect);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", parallaxEffect);
    };
  }, []);

  return (
    <div className="not-found-body">
      <div className="stars" id="stars"></div>
      <div className="orbit">
        <div className="planet planet-1" data-speed="10"></div>
      </div>
      <div className="orbit orbit-2">
        <div className="planet planet-2" data-speed="20"></div>
        <div className="planet planet-3" data-speed="15"></div>
      </div>
      <div className="astronaut">
        <i className="fas fa-user-astronaut"></i>
      </div>
      <div className="satellite">
        <i className="fas fa-satellite"></i>
      </div>

      <div className="container">
        <div className="error-container">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="error-code">404</div>
          <h1>Oops! Page Lost in Space</h1>
          <p className="error-message">
            The page you're looking for seems to have drifted off into the
            cosmos. It might have been moved, deleted, or perhaps it never
            existed in this dimension.
          </p>
          <button
            className="btn-home"
            onClick={() => (window.location.href = "/")}
          >
            <i className="fas fa-rocket"></i> Return to Home Planet
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
