import animation from '../../assets/threeDots.svg'
import classes from './Loader.module.css'

function Loader() {
    return (
        <div className={classes.animation}>
            <img
                src={animation}
                alt=''
            />
        </div>
    )
}

export default Loader
