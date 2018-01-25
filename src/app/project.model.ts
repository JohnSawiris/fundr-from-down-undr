export class Project {
  constructor (
    public name: string,
    public manager: string,
    public description: string,
    public moneyNeeded: string,
    public moneyFunded: string,
    public intentions: string,
    public rewards: string,
    public type: string,
    public contributions: any[]
  ) {}
}
