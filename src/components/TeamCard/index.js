// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  //   console.log(id, name, teamImageUrl)

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="hyper-link">
        <div className="list-card-item">
          <img src={teamImageUrl} alt={name} className="team-img" />
          <p className="team-name-txt">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
