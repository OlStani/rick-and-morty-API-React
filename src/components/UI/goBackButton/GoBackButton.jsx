import classes from './GoBackButton.module.css'
import { useNavigate } from 'react-router-dom'

function GoBackButton() {
    const navigate = useNavigate()

    return (
        <button
            className={classes.goBackButton}
            onClick={() => navigate(-1)}
        >
            go back
        </button>
    )
}

export default GoBackButton
