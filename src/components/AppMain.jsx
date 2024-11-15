import React, { useState } from "react";
import languages from "../languages";
import TabButton from "./TabButton";
import "./AppMain.css";

const AppMain = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    return (
        <div className="app-main">
            <div className="tabs">
                {languages.map((language) => (
                    <TabButton
                        key={language.id}
                        language={language}
                        isSelected={language.id === selectedLanguage.id}
                        onClick={setSelectedLanguage}
                    />
                ))}
            </div>
            <div className="description">
                <h2>{selectedLanguage.title}</h2>
                <p>{selectedLanguage.description}</p>
            </div>
        </div>
    );
};

export default AppMain;