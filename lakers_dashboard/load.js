let prevSchedule = document.getElementById('previous-schedule');
let nextSchedule = document.getElementById('next-schedule');
let roster = document.getElementById('roster');
let teamGear = document.getElementById('teamgear')
let teamName = document.getElementById('teamName')

function getTeam(req, res) {
    fetch(`https://lakers-backend.herokuapp.com/teamdetails`)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => handleTeam(data))
};
getTeam()

function getLastSchedule(req, res) {
    fetch('https://lakers-backend.herokuapp.com/lastevents')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(schedule => showLastSchedule(schedule.results))
}
getLastSchedule()

function getCurrentSchedule(req, res) {
    fetch(`https://lakers-backend.herokuapp.com/upcomingevents`)
        .then(res => res.json())
        .then(upcoming => showNextSchedule(upcoming.events))
}
getCurrentSchedule()

function getPlayers(req, res) {
    fetch(`https://lakers-backend.herokuapp.com/showplayers`)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(players => displayRoster(players.player))
}
getPlayers()

function getEquipment(req, res) {
    fetch(`https://lakers-backend.herokuapp.com/showequipment`)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => showEquipment(data.equipment))
};
getEquipment()

function showNextSchedule(schedule) {
    // console.log(schedule)
    if (schedule === null) {
        // console.log('no details')

        const noSchedule = document.createElement('p')

        noSchedule.innerHTML = 'No schedule information is available. Please try again later.'

        nextSchedule.appendChild(noSchedule)
    } else {
        schedule.forEach(game => {
            // console.log(game)

            let gameCard = document.createElement('div')
            // gameCard.setAttribute('class', 'game-details')
            // gameCard.classList = 'flex p-2 border-2 border-grey-400 rounded-md bg-white'
            gameCard.classList = 'flex p-2 border-2 border-indigo-600 rounded-md bg-white'

            let date = game.dateEvent
            let event = game.strEventAlternate
            let dateDeets = document.createElement('div')
            let dateDisplay = document.createElement('h6')
            dateDisplay.innerHTML = date
            dateDisplay.classList = 'font-bold m-2 p-2'

            let eventDeets = document.createElement('div')
            let eventDisplay = document.createElement('p')
            eventDisplay.innerHTML = event
            eventDisplay.setAttribute('class', 'italic text-center')
            eventDeets.setAttribute('class', 'm-4 p-4')


            // gameCard.appendChild(dateDeets)
            dateDeets.appendChild(dateDisplay)

            gameCard.appendChild(eventDeets)
            eventDeets.appendChild(eventDisplay)

            nextSchedule.appendChild(gameCard)

        });
    }
}


function showLastSchedule(schedule) {

    schedule.forEach(game => {
        // console.log(game)

        let gameCard = document.createElement('div')
        // gameCard.setAttribute('class', 'game-details')
        // gameCard.classList = 'p-2 rounded-md bg-white'
        // gameCard.classList = 'p-2 border-2 border-grey-400 rounded-md bg-white'
        gameCard.classList = 'p-2 border-2 border-black rounded-md bg-white mt-1.5 mb-1.5'

        let homeTeam = game.strHomeTeam
        let awayTeam = game.strAwayTeam
        let homeScore = game.intHomeScore
        let awayScore = game.intAwayScore


        let homeDeets = document.createElement('p')
        homeDeets.innerHTML = homeTeam

        let homeDeetsScore = document.createElement('p')
        homeDeetsScore.innerHTML = homeScore
        homeDeetsScore.classList = 'font-bold'

        let awayDeets = document.createElement('p')
        awayDeets.innerHTML = awayTeam

        let awayDeetsScore = document.createElement('p')
        awayDeetsScore.innerHTML = awayScore
        awayDeetsScore.classList = 'font-bold'


        let homeDisplay = document.createElement('div')
        homeDisplay.classList = 'flex justify-between'

        let awayDisplay = document.createElement('div')
        awayDisplay.classList = 'flex justify-between'

        homeDisplay.appendChild(homeDeets)
        homeDisplay.appendChild(homeDeetsScore)
        awayDisplay.appendChild(awayDeets)
        awayDisplay.appendChild(awayDeetsScore)


        gameCard.appendChild(homeDisplay)
        gameCard.appendChild(awayDisplay)

        prevSchedule.appendChild(gameCard)

    });
}


function displayRoster(players) {
    // console.log(players)
    players.forEach(player => {
        // console.log(game)

        let name = player.strPlayer
        let position = player.strPosition
        let height = player.strHeight
        let homeTown = player.strBirthLocation
        let picture = player.strRender

        if (position === 'Manager') {
            return;
        }

        let pic = document.createElement('img');
        pic.setAttribute('src', picture)
        pic.classList = 'm-2 p-2 sm:scale-25 md:scale-75 lg:scale-100'

        let nameSpot = document.createElement('span')
        nameSpot.innerHTML = name
        nameSpot.classList = 'font-bold m-2 p-2 text-lg'

        // let details = document.createElement('p')
        // details.innerText = position + " - " + height + " from " + homeTown
        // details.classList = 'm-2 p-2'

        let details = document.createElement('div')
        details.classList = 'm-2 p-2'

        let positionDisplay = document.createElement('strong')
        positionDisplay.innerHTML = position
        let heightDisplay = document.createElement('p')
        heightDisplay.innerHTML = height
        let homeTownDisplay = document.createElement('p')
        homeTownDisplay.innerHTML = homeTown

        details.appendChild(positionDisplay)
        details.appendChild(heightDisplay)
        details.appendChild(homeTownDisplay)

        const card = document.createElement('span')
        card.classList = 'border-2 border-indigo-600 rounded-md bg-white'
        card.appendChild(pic)
        card.appendChild(nameSpot)
        card.appendChild(details)
        roster.appendChild(card)

    });
}

function handleTeam(team) {
    // console.log(team.teams[0])

    let org = team.teams[0]
    // console.log(org)
    let socialFacebook = org.strFacebook
    let socialInstagram = org.strInstagram
    let socialTwitter = org.strTwitter
    let socialYoutube = org.strYoutube
    let teamLogo = org.strTeamLogo
    let teamLogoAlt = org.strTeamBadge
    // console.log(socialFacebook, socialInstagram, socialTwitter, socialYoutube, teamLogo, teamLogoAlt)

    let logo1 = document.createElement('img')
    let logo2 = document.createElement('img')

    logo1.setAttribute('src', teamLogo)
    // logo1.setAttribute('class', 'bg-white')
    logo2.setAttribute('src', teamLogoAlt)

    teamName.appendChild(logo1)
}

function showEquipment(gear) {
    gear.forEach(gear => {
        // console.log(gear)

        let jersey = gear.strEquipment
        let season = gear.strSeason

        if (season === '2019-2020') {
            return;
        }

        let pic = document.createElement('img');
        pic.setAttribute('src', jersey)
        pic.classList = 'm-2 p-2 transform sm:scale-25 md:scale-75 lg:scale-100'

        let jerseyCard = document.createElement('span')
        let text = document.createElement('p')
        text.innerText = season;
        text.classList = 'm-2 p-2 font-bold'

        jerseyCard.appendChild(text)
        jerseyCard.appendChild(pic)
        jerseyCard.classList = 'border-2 border-indigo-600 rounded-md bg-white'

        teamGear.append(jerseyCard)
    });
}