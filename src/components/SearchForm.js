import React from "react";
import { useGlobalContext } from "../context";

export default function SearchForm() {
  const {
    setResultYear,
    minYear,
    maxYear,
    findYearObject,
    setNumberYear,
    randomYear,
  } = useGlobalContext();

  const handleChangeYear = (e) => {
    e.preventDefault();
    setNumberYear(randomYear);

    const inputValue = document.getElementById("year").value;
    let newYear =
      inputValue === ""
        ? randomYear.year
        : parseInt(document.getElementById("year").value);

    if (newYear < minYear || newYear > maxYear) {
      setNumberYear(newYear);
      window.location = "/error";
    } else {
      let yearObject = findYearObject(newYear);
      setResultYear(yearObject);
    }
  };

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="year">В этом году в Фурманове:</label>
          <input
            type="number"
            name="year"
            id="year"
            placeholder={`от ${minYear} до ${maxYear}`}
          ></input>
          <button className="btn btn-primary" onClick={handleChangeYear}>
            поиск
          </button>
        </div>
      </form>
    </section>
  );
}
