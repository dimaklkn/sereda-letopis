import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
export default function Error() {
  const { minYear, maxYear } = useGlobalContext();

  return (
    <section className="error-page section">
      <div className="error-container">
        <h1 className="section-title animate__animated animate__fadeInDown">
          Ошибка
        </h1>
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
