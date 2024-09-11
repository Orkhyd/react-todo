import { useLanguageContext } from "../Context/LanguageContext";

const LanguageSelect = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();
  return (
    <select
      style={{
        width: 100,
        position: "absolute",
        top: 10,
        right: 10,
        height: "40px",
      }}
      onChange={onClickLanguageChange}
    >
      {Object.keys(languages).map((lng) => (
        <option key={languages[lng].nativeName} value={lng}>
          {languages[lng].nativeName}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
