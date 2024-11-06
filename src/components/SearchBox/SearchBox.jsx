import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.input}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        className={css.filterInput}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
