import { useEffect, useState } from "react";
import MatchService from "../MatchService";
import { Match } from "../models/Match";
import MatchList from "./MatchList";
import RankTable from "./RankTable";

function Main() {

  const [matchs, setMatchs] = useState(new Array<Match>())
  useEffect(() => {
    if (matchs.length == 0)
      MatchService.getMatch().then(matchs => setMatchs(matchs))
  })

    return <div className="main">
        <RankTable matchs={matchs} />
        <MatchList matchs={matchs}/>
    </div>
}

export default Main