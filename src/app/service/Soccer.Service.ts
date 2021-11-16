import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE, Teams } from "./ScheduleData";

@Injectable({
    providedIn:'root'
})

export class SoccerService{
    getScheduleAsync(){
        return Promise.resolve(SEASON_SCHEDULE);
    }
    getSchedule(){
        return SEASON_SCHEDULE;
    }
    getTeamsAsync(){
        return Promise.resolve(Teams);
    }
    getTeams(){
        return Teams;
    }

    private computeRankings(){
        
    }
}
