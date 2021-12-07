import React, { Component } from 'react';
import AuthorName from './AuthorName';

class Questionarea extends Component {
    render(props) {
        const showResult=(bool)=> {
            if (bool) {
                document.getElementById('result').innerText='Good job; that\'s right!'
            } else {
                document.getElementById('result').innerText='Too bad; that\'s the wrong answer.'
            }
            document.getElementById('result-modal').style.zIndex=5;
            document.getElementById('result-modal').style.opacity=0.9;
        }

        const submitAnswer=()=>{
            let answer = document.querySelector('input[name="answer"]:checked').value;
            if (answer === "default") alert('Please choose an answer');
            let activeQuote = document.getElementsByClassName('active')[0].firstElementChild.innerText.trim();
            let correctQuote= this.props.quotes.filter(quote=> quote.text.trim()===activeQuote)[0];
            if (answer === correctQuote.author) {
                showResult(true);
            } else {
                showResult(false);
            }
        }

        return (
            <div>
                <h2>Who said it?</h2>
                <ul id="answerList">
                    <input type="radio" id="default-answer" name="answer" value="default" defaultChecked/>
                    {this.props.quotes?.map(quote=> <AuthorName author={quote.author} key={quote.key}/>)}
                </ul>
                <button className="submit-button" onClick={submitAnswer}>Submit</button>
            </div>
        );
    }
}

export default Questionarea;
