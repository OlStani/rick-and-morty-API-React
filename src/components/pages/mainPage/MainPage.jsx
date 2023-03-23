import CharactersList from '../../charactersList/CharactersList'
import mainLogo from '../../../assets/rickAndMortyLogo.svg'
import SearchInput from '../../UI/searchInput/SearchInput'
import classes from './MainPage.module.css'
import { useState, useEffect } from 'react'
import { useCharactersStore } from '../../../store/useCharactersStore'
import Loader from '../../loader/Loader'
import { shallow } from 'zustand/shallow'

function Main() {
    const [searchQuery, setSearchQuery] = useState(
        localStorage.getItem('searchQuery') || ''
    )
    const [filterCharacters, fetchCharacters, isLoading, error] =
        useCharactersStore(
            (state) => [
                state.filterCharacters,
                state.fetchCharacters,
                state.isLoading,
                state.error,
            ],
            shallow
        )
    useEffect(() => {
        if (searchQuery) {
            filterCharacters(searchQuery)
        } else {
            fetchCharacters()
        }
    }, [])
    const handleInputChange = (e) => {
        const value = e.target.value
        setSearchQuery(value)
        filterCharacters(value)
        localStorage.setItem('searchQuery', value)
    }
    return (
        <div className={classes.main}>
            <img
                className={classes.mainImg}
                src={mainLogo}
                alt=''
            />
            <SearchInput
                value={searchQuery}
                onChange={handleInputChange}
                type='text'
                placeholder='Filter by name...'
                debounceTimeout={500}
                minLength={2}
            />
            {isLoading ? <Loader /> : <CharactersList />}
            {+error?.response.status === 404 && <p>Oops! Wrong name!</p>}
            {+error?.response.status !== 404 && <p>{error?.message}</p>}
        </div>
    )
}

export default Main
