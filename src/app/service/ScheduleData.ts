import { Type } from "@angular/core";
import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[]=[
    {id:1,PlayingDate:new Date(2021,08,10),HomeTeam:'Persija', AwayTeam:'Persipon', HomeScore:3,AwayScore:2,RefName:'joko',Notes:'Overtime'},
    {id:1,PlayingDate:new Date(2021,08,10),HomeTeam:'RRQ', AwayTeam:'PERSIPON', HomeScore:3,AwayScore:2,RefName:'BUDI',Notes:'Overtime'},
    {id:1,PlayingDate:new Date(2021,08,10),HomeTeam:'Bali United', AwayTeam:'Bambang', HomeScore:3,AwayScore:2,RefName:'joko',Notes:'Overkill'},
    {id:1,PlayingDate:new Date(2021,08,10),HomeTeam:'Black International', AwayTeam:'EVOS', HomeScore:3,AwayScore:2,RefName:'Badi',Notes:'Overtime'},
    {id:1,PlayingDate:new Date(2021,08,10),HomeTeam:'Navi', AwayTeam:'Todak', HomeScore:3,AwayScore:2,RefName:'Badi',Notes:'Terserah dah'}

]
export const Teams:Team[]=[
    {Id:1,Name:'Persija',Type:'Klub Lokal'},
    {Id:2,Name:'Persipon',Type:'Klub Lokal'},
    {Id:3,Name:'Bali United',Type:'Klub Lokal'},
    {Id:4,Name:'Evos',Type:'Klub Internasional'},
    {Id:5,Name:'RRQ',Type:'Klub Internasional'},
    {Id:6,Name:'Todak',Type:'Klub Lokal'},
    {Id:7,Name:'Navi',Type:'Klub Lokal'}
]
