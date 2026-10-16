import style from './Header.module.css';

export function Header({ brand, description, children}) {
    return(
       <header className={style.header}>
        <div className={style.brand}>
            <span className={style.logo}>GT</span>
        </div>
        <div>
            <strong className={style.brand}>{brand}</strong>
            <span>{description}</span>
        </div>
        <nav className={style.navigation}>
            {children}
        </nav>

       </header>
    );
}