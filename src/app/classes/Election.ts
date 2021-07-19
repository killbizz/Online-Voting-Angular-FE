export class Election {
    id: number;
    name: string;
    type: string;
    startDate: string;
    endDate: string;
    parties: number[];
    votes: number[];

    constructor(id: number, name: string, type: string, startDate: string, endDate: string, parties: number[], votes: number[]){
        this.id = id;
        this.name = name;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.parties = parties;
        this.votes = votes;
    }

}