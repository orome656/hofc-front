class HeaderProps {
    currentView: string
    onViewChange: Function
}

function Header(props: HeaderProps) {

    var computeLinkClass = function(currentView: string, viewName: string) {
        if (currentView === viewName) {
            return "active"
        }
        return ""
    }

    return <header>
        <a className={computeLinkClass(props.currentView, "classement")} onClick={() => props.onViewChange("classement")}>Classement</a>
        <a className={computeLinkClass(props.currentView, "calendrier")} onClick={() => props.onViewChange("calendrier")}>Calendrier</a>
    </header>
}

export default Header