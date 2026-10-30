document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const authorDiv = document.createElement("div");
    authorDiv.classList.add("author-info");
    
    const nameSpan = document.createElement("span");
    nameSpan.textContent = appConfig.author.name;
    const groupSpan = document.createElement("span");
    groupSpan.textContent = `| ${appConfig.author.group}`;
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${appConfig.author.email}`;
    emailLink.textContent = appConfig.author.email;
    emailLink.style.color = appConfig.themeColor;
    
    authorDiv.appendChild(nameSpan);
    authorDiv.appendChild(groupSpan);
    authorDiv.appendChild(emailLink);
    header.appendChild(authorDiv);

    const container = document.getElementById("cards-container");
    const template = document.getElementById("card-template");
    const footballers = footballersData.map(data => new Footballer(data));

    footballers.forEach(player => {
        const clone = template.content.cloneNode(true);
        const img = clone.querySelector(".card__image");
        img.src = player.image;
        img.alt = player.getDescription();
        clone.querySelector(".card__title").textContent = player.name;
        clone.querySelector(".card__club").textContent = `Клуб: ${player.club}`;
        clone.querySelector(".card__country").textContent = `Страна: ${player.country}`;
        clone.querySelector(".card__position").textContent = `Позиция: ${player.position}`;
        container.appendChild(clone);
    });
});