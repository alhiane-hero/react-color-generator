import {useState, useEffect} from 'react';
import './style.css';

function SyngleColor({rgb, weight, index, hexColor}) {

    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hexValue = `${hexColor}`;

    useEffect(_ => {
        const timeOut = window.setTimeout(_ => {
            setAlert(false);
        }, 3000);
        return _ => clearTimeout(timeOut);
    }, [alert]);

    return (
        <article className={`color ${index > 10 && 'color-light'}`}
            style={{backgroundColor: `rgb(${bcg})`}}
            onClick={_ => {
                setAlert(true);
                navigator.clipboard.writeText(`#${hexValue}`);
            }}
        >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>#{hexValue}</p>
        {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    );
}

export default SyngleColor;