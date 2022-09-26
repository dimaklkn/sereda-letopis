import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
export default function Error() {
  const { minYear, maxYear } = useGlobalContext();

  return (
    <section className="section about-section">
      <div className="events-result animate__animated animate__fadeInUp">
        <h1>Ошибка</h1>

        <h3 className="animate__animated animate__fadeInUp">{`Выберите годы между ${minYear} и ${maxYear} гг.`}</h3>
        <Link
          to="/"
          className="btn btn-primary animate__animated animate__fadeInUp"
        >
          Назад
        </Link>
      </div>
    </section>
  );
}
