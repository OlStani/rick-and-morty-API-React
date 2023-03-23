import classes from './SearchInput.module.css'
import { DebounceInput } from 'react-debounce-input'

function SearchInput(props) {
    return (
        <div className={classes.searchInputWrapper}>
            <DebounceInput
                {...props}
                className={classes.searchInput}
            />
        </div>
    )
}

export default SearchInput
