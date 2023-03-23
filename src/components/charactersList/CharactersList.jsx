import { useCharactersStore } from '../../store/useCharactersStore'
import classes from './CharactersList.module.css'
import { Link } from 'react-router-dom'

// TODO
//     -login google
// - не має співпадінь

function CharactersList() {
    const [characters] = useCharactersStore((state) => [state.characters])
    return (
        <div className={classes.charactersList}>
            {characters.map(({ name, species, image, id }) => (
                <Link
                    to={`/character/${id}`}
                    className={classes.characterCard}
                    key={id}
                >
                    <div className={classes.charactersPhotoWrapper}>
                        <img
                            className={classes.charactersPhoto}
                            src={image}
                            alt="character's photo"
                        />
                    </div>
                    <p className={classes.name}>{name}</p>
                    <p className={classes.species}>{species}</p>
                </Link>
            ))}
        </div>
    )
}

export default CharactersList
