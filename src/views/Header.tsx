class HeaderProps {
    onViewChange: Function
}

function Header(props: HeaderProps) {

    return <header>
        <a onClick={() => props.onViewChange("classement")}>Classement</a>
        <a onClick={() => props.onViewChange("calendrier")}>Calendrier</a>
    </header>
}

export default Header