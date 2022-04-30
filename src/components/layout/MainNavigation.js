import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
    return(
      <header className={classes.header}>
          <div className={classes.logo}>
              Great quotes!
          </div>
          <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to="/quotes" activeClassName={classes.active}>All quotes</NavLink> 
                </li>
                <li>
                    <NavLink to="/newQuotes" activeClassName={classes.active}>Add new quote</NavLink> 
                </li>
            </ul>
          </nav>
      </header>
    )
}

export default MainNavigation;