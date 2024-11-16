import { useState } from 'react';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <h2>{ code ? 'the button is ON' : 'The button is OFF'}</h2>
            <button onClick={() => missing(!isOn)}Toggle></button>
        </div>
    );
}

export default ToggleButton;