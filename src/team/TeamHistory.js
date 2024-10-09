import './Team.css';

import React, { useState } from "react";

import Table from 'react-bootstrap/Table';


function TeamHistory({ history }) {


    return (
        <div className='teamHistoryContainer'>
            <h2>Current Season</h2>
            <p> Highest Overall Rank: {history.currentSeasonHighestOverallRank} </p>
            <p> Highest Weekly Rank: {history.currentSeasonHighestWeeklyRank} </p>
            <p> Highest Weekly Points: {history.currentSeasonHighestWeeklyPoints} </p>

            <br />

            {
                (history.numberOfCompletedSeasons && history.numberOfCompletedSeasons > 0)
                    ?
                        <div>
                            <h2>All time</h2>
                            <p> Best yearly finish: {history.highestYearlyFinishRank} in {history.highestYearlyFinishRankSeason}</p>
                            <p> Best yearly points: {history.highestYearlyFinishPoints} in {history.highestYearlyFinishPointsSeason}</p>
                            <p> Average yearly rank: {history.averageYearlyRank} </p>
                            <p> Average yearly points: {history.averageYearlyPoints} </p>
                            <p> No of completed seasons: {history.numberOfCompletedSeasons} </p>
                        </div>
                    :
                        null
            }

        </div>
    );
}


export default TeamHistory;