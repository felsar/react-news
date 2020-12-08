import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import Form from './components/form/';
import NewsList from './components/NewsList';

//import useSelect from './hooks/useSelect';

function App() {
    
    const [category, setCategory] = useState('');

    const [news, setNews] = useState([]);
    
    useEffect(() => {
        const callAPI = async () => {
            const COUNTRY = "mx";
            const API_KEY = "0b85db38f9a54957a537b7db83c38871";
            const API_URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${API_KEY}`;

            const response = await fetch(API_URL);
            const news = await response.json();

            setNews(news.articles);
        }

        callAPI();
    }
        
    , [category]
    );

    return ( 
        <div id="main">
            <Header title='News' />
            <div className="container white">
                <Form
                    setCategory={setCategory}
                />

                <NewsList 
                    news={news}
                />
            </div>
        </div>
     );
}
 
export default App;