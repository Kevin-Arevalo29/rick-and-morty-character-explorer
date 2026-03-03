import React, { useEffect, useState } from 'react';
import CharacterCard from '../../CharacterCard/CharacterCard';
import { NavLink } from 'react-router-dom';

const CharacterP = () => {
    const [characterList, setCharacterList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationInfo, setPaginationInfo] = useState({});
    
    // Estados para filtros
    const [nameFilter, setNameFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

                // Agregar filtros a la URL si están presentes
                if (nameFilter) url += `&name=${nameFilter}`;
                if (statusFilter) url += `&status=${statusFilter}`;
                if (typeFilter) url += `&type=${typeFilter}`;
                if (genderFilter) url += `&gender=${genderFilter}`;

                const response = await fetch(url);
                const data = await response.json();

                setPaginationInfo(data.info);
                setCharacterList(data.results);
            } catch (error) {
                console.error("Hay un error: ", error);
            }
        };

        fetchCharacters();
    }, [currentPage, nameFilter, statusFilter, typeFilter, genderFilter]);

    const onSearch = () => {
        setCurrentPage(1); // Reiniciar a la primera página
    };

    return (
      
        <div className='position'>
            <div className='title2'>
                <h1>Personajes de Rick And Morty</h1>
                
            </div>
            
            {/* Filtros de búsqueda */}
            <div className="filters">
                <input
                    type="text"
                    placeholder="Name"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Type"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Gender"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                />
                <button onClick={onSearch}>Buscar</button>
            </div>
            
            {/* Lista de personajes */}
            {characterList.map((character) => (
                <CharacterCard
                    key={character.id}
                    name={character.name}
                    image={character.image}
                    gender={character.gender}
                    status={character.status}
                />
            ))}
            
            {/* Botones de paginación */}
            <div>
                <br />
                <button
                    className='button'
                    onClick={() => setCurrentPage(currentPage - 1)} 
                    disabled={!paginationInfo.prev}
                >
                    Anterior
                </button>
                <span className='textb'>Página {currentPage} de {paginationInfo.pages}</span>
                <button
                    className='button'
                    onClick={() => setCurrentPage(currentPage + 1)} 
                    disabled={!paginationInfo.next}
                >
                    Siguiente
                </button>
                <ul id='po'>
                    <ol> <NavLink to='/'>Inicio</NavLink></ol>
                </ul>
            </div>
        </div>
    );
};

export default CharacterP;