import React from 'react'
import css from './BtnSection.module.css'
import PropTypes from 'prop-types';

function BtnSection({onClickFeedback}) {
    
  return (
      <div>
          <h1>Please leave Feedback</h1>
          <ul className = {css.list_btn}>
              <li className = {css.list_item}>
                  <button className = {css.list_btn} name="good" type="button" onClick={onClickFeedback}>Good</button>
              </li>
              <li className = {css.list_item}><button className = {css.list_btn} type="button" name="neutral" onClick={onClickFeedback}>Neutral</button></li>
              <li className = {css.list_item}><button className = {css.list_btn} type="button" name="bad" onClick={onClickFeedback}>Bad</button></li>
          </ul>
    </div>
  )
}

BtnSection.propTypes = {
	onClickFeedback: PropTypes.func.isRequired
};
export default BtnSection