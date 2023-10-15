import FilterWindow from "./FilterWindow"
import { useState } from "react";

export default function TrackFilter() {

    const [filter, setFilter] = useState(false);

  function handleClick() {
    setFilter(!filter)
  }
    return(
        <div className="centerblock__filter filter">
            {filter && <FilterWindow />}
          <div className="filter__title">Искать по:</div>
          <div onClick={handleClick} className="filter__button button-author _btn-text">
            исполнителю
          </div>
          <div className="filter__button button-year _btn-text">
            году выпуска
          </div>
          <div className="filter__button button-genre _btn-text">жанру</div>
        </div>
    )
}