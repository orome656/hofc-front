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
  const [isMatchsDownloaded, setIsMatchsDownloaded] = useState(false)
  const [isActusDownloaded, setIsActusDownloaded] = useState(false)
  const [matchs, setMatchs] = useState(new Array<Match>())
  const [actus, setActus] = useState(new Array<Actu>())
  useEffect(() => {
    if (!isMatchsDownloaded) {
      MatchService.getMatch().then(matchs => setMatchs(matchs))
      setIsMatchsDownloaded(true)
    }
      

  })
  useEffect(() => {
    if (!isActusDownloaded) {
      ActuService.getActus().then(actus => setActus(actus))
      setIsActusDownloaded(true)
    }
      
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