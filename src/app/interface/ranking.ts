import { NumberLiteralType } from "typescript";

export interface Ranking{
    TeamName: String;
    GamesPlayed: NumberLiteralType;
    Wins: number;
    Ties:number;
    GoalsFor: number;
    GoalAgainsts: number;
}