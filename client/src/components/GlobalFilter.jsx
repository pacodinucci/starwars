import './table.css'

export const GlobalFilter = ({ filter, setFilter }) => {
    return(
        <div style={{margin: '8px'}}>
            <span style={{padding: '16px' }}>
                {/* Search: {' '} */}
                <input value={filter || ''} onChange={e => setFilter(e.target.value)} placeholder='Search...' style={{border: '1px solid black', borderRadius: '4px'}} />
            </span>
        </div>
    )
}