import React, { Component } from 'react';

class Quotecard extends Component {
    render(props) {
        const revealQuestion=(key)=> {
            document.getElementById('question-area').classList.remove('no-display');
        }

        const flipCard=(e)=> {
            e.currentTarget.classList.add('active');
            const cards = Array.from(document.getElementsByClassName('card'));
            cards.forEach(card => {
                if (!card.classList.contains('active')) {
                    card.classList.add('hidden')
                    card.classList.add('no-display')
                }
            });
            e.currentTarget.classList.remove('reverse');
            e.currentTarget.classList.add('face');
            e.currentTarget.firstElementChild.classList.remove('hidden');
            revealQuestion(e.currentTarget.key);
        }
        return (
            <div key={this.props.index} className="card reverse" onClick={flipCard}>
                <h1 className="card-text hidden">{this.props.quote}</h1>
            </div>
        );
    }
}

export default Quotecard;

