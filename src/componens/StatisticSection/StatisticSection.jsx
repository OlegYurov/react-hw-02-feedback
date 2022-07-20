import React from 'react'
import css from './StatisticSection.module.css'
import PropTypes from 'prop-types';

function StatisticSection({valueGood, valueNeutral, valueBad, positiveFeedback = 0, valueTotal = 0}) {
  return (
      <div>
          <h2>Statistics</h2>
          <ul>
              <li className={css.statistic__item}>
                  <span className={css.statistic__name}>Good :</span>
                  <span className={css.statistic__value}>{valueGood}</span>
              </li>
              <li className={css.statistic__item}>
                  <span className={css.statistic__name}>Neutral :</span>
                  <span className={css.statistic__value}>{valueNeutral}</span>
              </li>
              <li className={css.statistic__item}>
                  <span className={css.statistic__name}>Bad :</span>
                  <span className={css.statistic__value}>{valueBad}</span>
              </li>
               <li className={css.statistic__item}>
                  <span className={css.statistic__name}>Total :</span>
                  <span className={css.statistic__value}>{valueTotal}</span>
              </li>
               <li className={css.statistic__item}>
                  <span className={css.statistic__name}>PositiveFeedback :</span>
                  <span className={css.statistic__value}>{positiveFeedback}%</span>
              </li>
    </ul>
      </div>
  )
}

StatisticSection.propTypes = {
	valueGood: PropTypes.number.isRequired,
	valueNeutral: PropTypes.number.isRequired,
	valueBad: PropTypes.number.isRequired,
	 positiveFeedback: PropTypes.number.isRequired,
	valueTotal: PropTypes.number.isRequired
};

export default StatisticSection