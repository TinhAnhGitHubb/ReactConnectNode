
import PropTypes from 'prop-types';
import styles from "./cssModule/EnterField.module.css"
const EnterField = ({ typePrint }) => {
  return (
    <div className={styles.inputContainer}>

      <label className={styles.LabelName}>{typePrint.name}</label>
      <input type="text" placeholder={typePrint.entering} />
    </div>
  );
};

EnterField.propTypes = {
  typePrint: PropTypes.shape({
    name: PropTypes.string.isRequired,
    entering: PropTypes.string.isRequired
  }).isRequired
};

export default EnterField;
