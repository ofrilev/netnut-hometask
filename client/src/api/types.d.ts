export type stepsFetchedData = {
    plans: {
        plan_id: number
        name:string,
        type:string,
        cost: string,
        details: string
    }[]
    addons: {
        add_on_id: number,
        title: string,
        description: string,
        monthly_price:string,
        yearly_price: string,
    }[]
}
export type useSelection = {
    Name: string,
    Email: string,
    PhoneNumber: string,
    PlanID:number,
    AddOnIDs: number[],

}