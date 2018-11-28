import React from 'react'
import Article from './Article'
import Accordion from '../decorators/accordion';
import PropTypes from "prop-types";

export default class ArticleList extends Accordion {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string,
                date: PropTypes.string,
                title: PropTypes.string.isRequired,
                text: PropTypes.string,
                comments: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.string,
                    user: PropTypes.string,
                    text: PropTypes.string,
                })),
            }),
        ),
    };

    render() {
        const articleElements = this.props.articles.map(article => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {this.state.openId === article.id}
                     toggleOpen = {this.toggleAccordion(article)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}
