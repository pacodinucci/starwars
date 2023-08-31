import { useEffect, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPlanets} from '../actions'
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table'
import { PLANETS_COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'

function Planets() {
    const dispatch = useDispatch();
    const allPlanets = useSelector((state) => state.planets);
    

    useEffect(() => {
        dispatch(getPlanets());
    }, [])

    const columns = useMemo(() => PLANETS_COLUMNS, []);
    const data = useMemo(() => allPlanets, [allPlanets]);
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        state,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize
    } = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy, usePagination)

    const {globalFilter, pageIndex, pageSize} = state;

  return (
    <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render('Header')}
                            <span>
                                {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' ↓ ' 
                                        : ' ↑ ' 
                                    : ''}
                            </span>
                        </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div style={{
                position: 'sticky',
                bottom: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '10px',
                border: '1px solid black',
                borderRadius: '4px',
                gap: '2px'
            }}>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span style={{marginLeft: '10px'}}>
                    Page{' '}
                    <strong style={{marginRight: '10px'}}>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    || Go to Page:{' '}
                    <input 
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }}
                        style={{width: '50px', border: '1px solid black', borderRadius: '4px'}} 
                    />
                </span>{' '}
                <select 
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                    style={{marginLeft: '10px'}}>
                        {[10, 25, 50].map(pageSize => (
                            <option value={pageSize} key={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
            </div>
    </>
  )
}

export default Planets;