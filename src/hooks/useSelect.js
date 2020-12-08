import React, {useState} from 'react';

const useSelect = (initState, options) => {

    const [selectState, setSelectState] = useState(initState);
    
    const SelectNews = () => (
        <select
            className="browser-default"
            value={selectState}
            onChange={e => setSelectState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
                
            ))}

        </select>
    );

    //
    return [selectState, SelectNews];
}
 
export default useSelect;