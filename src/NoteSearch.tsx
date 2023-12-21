import { HttpClient, Note, Space } from 'notu';
import { useState } from 'react';
import 'purecss';
import './NoteSearch.css';

interface NoteSearchProps {
    notuClient: HttpClient,
    space: Space,
    onFetch: (notes: Array<Note>) => void
}


export const NoteSearch = ({
    notuClient,
    space,
    onFetch
}: NoteSearchProps) => {

    const [searchText, setSearchText] = useState('');

    function onSearchTextChange(event): void {
        setSearchText(event.target.value);
    }

    async function onSearchSubmit(): Promise<void> {
        const searchResults = await notuClient.getNotes(searchText, space.id);
        onFetch(searchResults);
    }

    return (
        <div className="notesearch_base">
            <input type="text" className="notesearch_text"
                value={searchText} onChange={onSearchTextChange}></input>

            <button onClick={onSearchSubmit}>Search</button>
        </div>
    );
}