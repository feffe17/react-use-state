import "./TabButton.css";

const TabButton = ({ language, isSelected, onClick }) => {
  return (
    <button
      className={`tab-button ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(language)}
    >
      {language.title}
    </button>
  );
};

export default TabButton;