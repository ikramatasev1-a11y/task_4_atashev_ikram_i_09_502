class Footballer {
    constructor({ id, name, club, country, position, image }) {
        this.id = id;
        this.name = name;
        this.club = club;
        this.country = country;
        this.position = position;
        this.image = image;
    }
    getDescription() { return `${this.name} — ${this.position} клуба ${this.club}`; }
}