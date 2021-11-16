export interface Schedule{
    id: number;
    PlayingDate: Date;
    HomeTeam: string;
    AwayTeam: string;
    HomeScore: number;
    AwayScore: number;
    RefName: string;
    Notes?: string;
}