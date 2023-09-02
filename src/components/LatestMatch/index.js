// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    // id,
    manOfTheMatch,
    // matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  //   console.log(latestMatchDetails)

  return (
    <div className="latest-match-bg-container">
      <div className="cont-1">
        <p className="competingTeam-txt">{competingTeam}</p>
        <p className="date-txt">{date}</p>
        <p className="date-txt">{venue}</p>
        <p className="date-txt">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-img"
      />
      <div className="cont-1">
        <p className="date-txt">First Innings</p>
        <p className="date-txt">{firstInnings}</p>
        <p className="date-txt">Second Innings</p>
        <p className="date-txt">{secondInnings}</p>
        <p className="date-txt">Man Of The Match</p>
        <p className="date-txt">{manOfTheMatch}</p>
        <p className="date-txt">Umpires</p>
        <p className="date-txt">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
