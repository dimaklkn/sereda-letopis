import React from "react";
import { useGlobalContext } from "../context";
import ScrollTop from "./ScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Year = () => {
  const { resultYear } = useGlobalContext();
  const { year, events } = resultYear;

  return (
    <>
      <section className="section about-section" key={year}>
        <div className="events-result animate__animated animate__fadeInUp">
          <h1 className="section-title">В Фурманове {year} год:</h1>

          {events.map((singleEvent, index) => {
            return (
              <p key={index}>
                {" "}
                <FontAwesomeIcon icon={faCheck} color="#e63946" /> {singleEvent}
              </p>
            );
          })}
        </div>
      </section>
      <ScrollTop />
    </>
  );
};

export default Year;
