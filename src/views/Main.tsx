import { useEffect, useState } from "react";
import MatchService from "../MatchService";
import ActuService from "../ActuService";
import { Match } from "../models/Match";
import MatchList from "./MatchList";
import ActuList from "./ActuList";
import RankTable from "./RankTable";
import { Container } from "@material-ui/core";
import { Actu } from "../models/Actu";


class MainProps {
  currentView: string
}

function Main(props: MainProps) {

  const [matchs, setMatchs] = useState(new Array<Match>())
  const [actus, setActus] = useState(new Array<Actu>())
  useEffect(() => {
    if (matchs.length === 0)
      MatchService.getMatch().then(matchs => setMatchs(matchs))
  })
  useEffect(() => {
    if (actus.length === 0)
      ActuService.getActus().then(actus => setActus(actus))
  })

  var displayView = function(currentView: string) {
    if(currentView === "classement") {
      return <RankTable matchs={matchs} />
    } else if(currentView === "actualites") {
      return <ActuList actus={actus}/>
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