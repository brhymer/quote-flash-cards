import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import QuestionArea from './QuestionArea';
import LoadingIcon from './LoadingIcon';
import axios from 'axios';

const endpoint = `http://localhost:3002/quote`


class Cardarea extends Component {
    state = {
        quotes: [],
        loading: true
    }
    componentDidMount() {
        axios.get(endpoint)
        .then(res => {
            const quotes = res.data;
            console.log(quotes);
            this.setState({ quotes: quotes, loading: false });
        })
    }

    render() {

        return (
            <div className="container">
                {this.state.loading && <LoadingIcon />}

                {this.state.quotes.quotes?.map(item => <QuoteCard key={item.key} author={item.author} quote={item.text}/>) }
                <div id="question-area" className="no-display">
                    <QuestionArea quotes={this.state.quotes.quotes}/>
                </div>
                <div>
                    <p><b>Instructions: </b></p>
                    <p>Choose a card to reveal a famous quote, then select an answer and click the Submit button to guess who said it!</p>
                </div>
            </div>
        );
    }
}

export default Cardarea;
