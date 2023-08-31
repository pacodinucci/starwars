import logo from '../assets/Star_wars_1977_us.svg.png'

function Nav({ setSelectedComponent, selectedComponent }) {
  const handleClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className='flex'>
        <div className='flex justify-between w-full h-[21.6vh] bg-gradient-to-l from-blue-400 to-blue-900 items-center shadow-xl'>
            <img src={logo} alt="" className='w-40 h-40 bg-gradient-to-l from-blue-900 to-blue-800 mx-24 shadow-md'/>
            <div className='mx-24'> 
                <ul className='flex items-center gap-4'>
                    <li 
                      onClick={() => handleClick('characters')}
                      className={`cursor-pointer hover:text-zinc-500 ${selectedComponent === 'characters' ? 'text-zinc-400 font-semibold'  : ''}`}
                      >CHARACTERS</li>
                    <li 
                      onClick={() => handleClick('planets')}
                      className={`cursor-pointer hover:text-zinc-500 ${selectedComponent === 'planets' ? 'text-zinc-400 font-semibold' : ''}`}>
                        PLANETS</li>
                    <li 
                    onClick={() => handleClick('films')}
                    className={`cursor-pointer hover:text-zinc-500 ${selectedComponent === 'films' ? 'text-zinc-400 font-semibold' : ''}`}>
                      FILMS</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav