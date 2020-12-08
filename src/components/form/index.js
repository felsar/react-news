import React from 'react';
import PropTypes from 'prop-types';

import useSelect from '../../hooks/useSelect';

import styles from './Form.module.css';

const Form = ({setCategory}) => {
    const CATEGORIES = [
        { value: 'general',     label: 'General' },
        { value: 'business',    label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health',      label: 'Health' },
        { value: 'science',     label: 'Science' },
        { value: 'sports',      label: 'Sports' },
        { value: 'technology',  label: 'Technology' },
              
    ];

    //Custom hook Receive: initialCat and options
    const [category, SelectNews] = useSelect(CATEGORIES[0].value, CATEGORIES);

    //OnSubmit, update category and send to App
    const searchNews = e => {
        e.preventDefault();
        setCategory(category);
    }

    return ( 
        <div className={`${styles.browser} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={searchNews}>
                    <h2 className={styles.heading}>New's Categories</h2>
                    <SelectNews />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Form.propTypes = {
    setCategory : PropTypes.func.isRequired,
}
 
export default Form;
