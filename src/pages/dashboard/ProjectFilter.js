
const filterList = ['all', "mine", 'development', 'design', 'marketing', 'sales']

export default function ProjectFilter({currentFilter, changeFilter}) {

  return (
    <div className="project-filter">
        <nav>
            <p>Filter by:</p>
            {filterList.map(filterItem => (
                <button key={filterItem}
                onClick={() => changeFilter(filterItem)}
                className={currentFilter === filterItem ? 'active' : ''}
                >{filterItem}</button>
            ))}
        </nav>
    </div>
  )
}
