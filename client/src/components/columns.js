import { format, parseISO, isValid } from 'date-fns'

export const CHARACTERS_COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Year of Birth',
        accessor: 'birth_year'
    },
    {
        Header: 'Gender',
        accessor: 'gender',
        Cell: ({ value }) => value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : ''
    },
    {
        Header: 'Eye color',
        accessor: 'eye_color',
        Cell: ({ value }) => value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : ''
    },
    {
        Header: 'Hair Color',
        accessor: 'hair_color',
        Cell: ({ value }) => value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : ''
    },
    {
        Header: 'Height',
        accessor: 'height'
    },
    {
        Header: 'Mass',
        accessor: 'mass'
    },
    {
        Header: 'Homeworld',
        accessor: 'homeworld.name'
    },
    {
        Header: 'Films',
        accessor: data => data.films.map(film => film.title).join(', ')
    }
];

export const FILMS_COLUMNS = [
    {
        Header: 'Title',
        accessor: 'title'
    },
    {
        Header: 'Director',
        accessor: 'director'
    },
    {
        Header: 'Producer',
        accessor: 'producer'
    },
    {
        Header: 'Release Date',
        accessor: 'release_date',
        Cell: ({ value }) => {
            const parsedDate = parseISO(value);
    
            if (isValid(parsedDate)) {
                return format(parsedDate, 'dd/MM/yyyy');
            } else {
                return 'Invalid Date';
            }
        }
    }
];

export const PLANETS_COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Climate',
        accessor: 'climate'
    },
    {
        Header: 'Gravity',
        accessor: 'gravity'
    },
    {
        Header: 'Terrain',
        accessor: 'terrain'
    },
    {
        Header: 'Diameter',
        accessor: 'diameter'
    },
    {
        Header: 'Residents',
        accessor: data => data.res_idents.map(resident => resident.name).join(', ')
    }
]