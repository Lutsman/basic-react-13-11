import React from 'react'
import ArticleList from './ArticleList'
import PropTypes from 'prop-types'

function App({articles}) {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles={articles}/>
        </div>
    )
}

App.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            date: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            comments: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string,
                user: PropTypes.string,
                text: PropTypes.string,
            })),
        }),
    ),
};

export default App