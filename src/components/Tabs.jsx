export const Tabs = ({todos,handleSetTab}) => {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numberOfTasks = tab==='All' ? todos.length
         : tab==='Open' ? todos.filter(todo => !todo.complete).length
                        : todos.filter(todo => todo.complete).length
        return (
          <button key={tabIndex} className="tab-button" onClick={()=> handleSetTab(tab)}>
            <h4>{tab} <span>({numberOfTasks})</span></h4>
          </button>
        );
      })}
    </nav>
  );
};
