import React from 'react';
import '../styles/Languages.css'
import { languages } from '../constants/languages';

const Languages = React.forwardRef((_, ref) => {

    return (
        <div ref={ref} className="languages">
            {languages.map((language, index) => (
                <div key={index} className="language-group">
                <p className="title">{language.title}</p>
                <div className="language">
                    {language.langs.map((lang, i) => (
                    <div key={i} className="lang">
                        <img src={lang.logo} alt={lang.name} />
                        <span>{lang.name}</span>
                    </div>
                    ))}
                </div>
                </div>
            ))}
        </div>
    );

});

export default Languages;