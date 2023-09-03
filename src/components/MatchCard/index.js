// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  let matchStatusClassName = null

  if (matchStatus === 'Won') {
    matchStatusClassName = 'won-matchStatus'
  } else {
    matchStatusClassName = 'lost-matchStatus'
  }

  return (
    <li className="list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingTeam-logo"
      />
      <p className="competing-team-txt">{competingTeam}</p>
      <p className="result-txt">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
