import { useEffect } from 'react'
import { useCharactersStore } from '../../../store/useCharactersStore'
import { useParams } from 'react-router-dom'
import GoBackButton from '../../UI/goBackButton/GoBackButton'
import classes from './Character.module.css'
import { shallow } from 'zustand/shallow'

const CHARACTERS_INFO = [
    { title: 'Gender', field: 'gender' },
    { title: 'Status', field: 'status' },
    { title: 'Specie', field: 'species' },
]

function Character() {
    const [character, fetchCharacterById] = useCharactersStore(
        (state) => [state.character, state.fetchCharacterById],
        shallow
    )
    const { id } = useParams()
    useEffect(() => {
        fetchCharacterById(id)
    }, [id])
    return (
        <div className={classes.container}>
            <div className={classes.buttonWrapper}>
                <GoBackButton />
            </div>
            <div className={classes.character}>
                <img
                    className={classes.characterPhoto}
                    src={character.image}
                    alt='character photo'
                />
                <h1 className={classes.name}>{character.name}</h1>
                <h2 className={classes.mainTitle}>Informations</h2>
                <ul className={classes.infoList}>
                    {CHARACTERS_INFO.map((c) => (
                        <li
                            className={classes.listItem}
                            key={c.field}
                        >
                            <p className={classes.listItemTitle}>{c.title}</p>
                            <p className={classes.listItemSubtitle}>
                                {character[c.field]}
                            </p>
                            <span className={classes.underline}></span>
                        </li>
                    ))}
                    <li className={classes.listItem}>
                        <p className={classes.listItemTitle}>Origin</p>
                        <p className={classes.listItemSubtitle}>
                            {character.origin?.name}
                        </p>
                        <span className={classes.underline}></span>
                    </li>
                    <li className={classes.listItem}>
                        <p className={classes.listItemTitle}>Type</p>
                        <p className={classes.listItemSubtitle}>
                            {character.type || 'Unknown'}
                        </p>
                        <span className={classes.underline}></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Character
