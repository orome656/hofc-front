import { useEffect, useState } from "react";
import MatchService from "../MatchService";
import { Match } from "../models/Match";
import MatchList from "./MatchList";
import RankTable from "./RankTable";

class MainProps {
  currentView: string
}

function Main(props: MainProps) {

  const [matchs, setMatchs] = useState(new Array<Match>())
  useEffect(() => {
    if (matchs.length === 0)
      MatchService.getMatch().then(matchs => setMatchs(matchs))
  })

  var displayView = function(currentView: string) {
    if(currentView === "classement") {
      return <RankTable matchs={matchs} />
    } else if(currentView === "calendrier") {
      return <MatchList matchs={matchs}/>
    } else {
      return <div>404</div>
    }
  }

    return <div className="main">
        {displayView(props.currentView)}
    </div>
}

export default Main