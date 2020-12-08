import React from 'react';
import PropTypes from 'prop-types';

import News from './News';

const NewsList = ({ news }) => {
    return (
        <div className="row">
            {news.map(singleNews => (
                <News
                    key={singleNews.url}
                    news={singleNews}
                />   
            )

            )}
        </div>
     );
}

NewsList.propTypes = {
    news : PropTypes.array.isRequired,
}
 
export default NewsList;