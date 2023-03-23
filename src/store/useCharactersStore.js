import { create } from 'zustand'
import axios from 'axios'
import { sortByName } from '../utils/sortByName'

const BASE_URL = 'https://rickandmortyapi.com/api/character/'

export const useCharactersStore = create((set, get) => ({
    characters: [],
    character: {},
    isLoading: false,
    error: null,
    fetchCharacters: async () => {
        try {
            set({
                error: null,
                isLoading: true
            })
            const response = await axios.get(
                BASE_URL
            )
            set({
                characters: sortByName(response.data.results)
            })
        }
        catch (error) {
            set({
                error
            })
        }
        finally {
            set({
                isLoading: false
            })
        }
    },
    filterCharacters: async (searchQuery) => {
        try {
            set({
                error: null,
                isLoading: true
            })
            const response = await axios.get(
                `${BASE_URL}?name=${searchQuery}`
            )
            set({
                characters: sortByName(response.data.results)
            })
        }
        catch (error) {
            set({
                error,
                characters: []
            })
        }
        finally {
            set({
                isLoading: false
            })
        }
    },
    fetchCharacterById: async (id) => {
        const character = get().characters.find(c => c.id === +id)
        if (character) {
            set({
                character
            })
        }
        else {
            try {
                set({
                    error: null,
                    isLoading: true
                })
                const response = await axios.get(
                    `${BASE_URL}${id}`
                )
                set({
                    character: response.data
                })
            }
            catch (error) {
                set({
                    error
                })
            }
            finally {
                set({
                    isLoading: false
                })
            }
        }
    },
}))
