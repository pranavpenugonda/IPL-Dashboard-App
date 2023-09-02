// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data.team_banner_url)
    // const dataTeams = data.teams
    // console.log(data)

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const arrayMatches = formattedData.recentMatches
    console.log(arrayMatches)

    const latestMatchDetailsFormatted = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    // console.log(latestMatchDetailsFormatted)

    const len = formattedData.recentMatches.length

    for (let i = 0; i < len; i += 1) {
      const recentMatch = formattedData.recentMatches[i]
      const recentMatchesFormatted = {
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        date: recentMatch.date,
        firstInnings: recentMatch.first_innings,
        id: recentMatch.id,
        manOfTheMatch: recentMatch.man_of_the_match,
        matchStatus: recentMatch.match_status,
        result: recentMatch.result,
        secondInnings: recentMatch.second_innings,
        umpires: recentMatch.umpires,
        venue: recentMatch.venue,
      }
      //   console.log(recentMatchesFormatted)
      this.setState(prevState => ({
        recentMatches: [...prevState.recentMatches, recentMatchesFormatted],
      }))
    }

    this.setState({
      teamBannerUrl: formattedData.teamBannerUrl,
      latestMatchDetails: latestMatchDetailsFormatted,
      isLoading: false,
    })
    // console.log(formattedData)
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state
    const randomIndex = Math.floor(Math.random() * 8)
    const backgroundColors = [
      '#a4261d',
      '#f7db00',
      '#da237b',
      '#13418b',
      '#f26d22',
      '#5755a7',
      '#d91c1f',
      '#4f5db0',
    ]
    return (
      <div
        style={{backgroundColor: backgroundColors[randomIndex]}}
        className="team-matches-bg-container"
      >
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div
            style={{backgroundColor: backgroundColors[randomIndex]}}
            className="team-matches-bg-container"
          >
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner-img"
            />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="ul-container">
              {recentMatches.map(eachMatch => (
                <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
