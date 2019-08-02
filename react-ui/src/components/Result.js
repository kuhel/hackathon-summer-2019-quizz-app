import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result({ quizResult, answersCount, quizLength }) {
    return (
        <CSSTransitionGroup
          className="container result"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <div>
              {quizResult !== 0 ?
                <h2>You passed the test!</h2>
                    :
                <h2>You failed the test!</h2>
              }
              <h4>{answersCount[1]} out of {quizLength} answers were correct.</h4>
          </div>
        </CSSTransitionGroup>
    );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
