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
    userInfo: {
        name: string, phone: string, email: string 
    },
    selectPlan: { plan:string, duration: string  },
    addOns: [number]
}