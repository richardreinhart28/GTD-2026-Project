const FilterTasks = ({currentFilter, onFilterChange}) => {
    const options = ['Not Started', 'In Progress', 'Completed'];

    return (
        <div className="filter-sect">
            <h3>Filter Tasks</h3>

            <div className="filter-options">
                {options.map(option =>(
                    <label key={option} className="filter-label">
                        <input
                            type="checkbox"
                            checked ={currentFilter.includes(option)}
                            onChange={() => onFilterChange(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default FilterTasks;