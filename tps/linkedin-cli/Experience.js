export default class Experience {
    //Lieu Géographique / Entrprise  / Rôle / Année début / Année fin / Details
    constructor(city, business, role, details, start, end) {
        this.business = business;
        this.city = city
        this.role = role
        this.details = details
        this.start = start;
        this.end = end
        this.isCurrent = !!end
    }
}