/**
 * DOM 
 * 
 * Document Object Model
 *      -looks like a tree diagram (root, branches, nodes)
 * 
 * Accessing the DOM
 * 
 *      byTagNames (p, ul, div)
 *      querySelector (.class, id)
 *      querySelectorAll (.class, id)
 *      byId (id)
 */

let myName = document.getElementById('myName')

myName.innerText = 'Satch'

// console.log(myName.style)

// myName.style.fontFamily = 'sans-serif'
// myName.style.color = 'red'

// console.log(myName);

myName.classList.add('red')

myName.classList.remove('red')

myName.classList.add('darkgoldenrod')

/**Refactor as a Class-based object
 * 
 * class Superhero {
 * 
 * }
 * 
 * 
 */

class Superhero {
    constructor() {
        this.hero,
        this.alias,
        this.powers = [],
        this.enemies = [],
        this.imgUrl
    }
    // end constructor
    addPower(item) {
        const powerList = document.getElementById('powerList')
        const li = document.createElement('li')
        const powers = this.powers
        // take item and push it into powers array
        powers.push(item)

        li.innerText = item

        powerList.appendChild(li)
    }

    addEnemy(item) {
        const enemyList = document.getElementById('enemyList')
        const li = document.createElement('li')
        const enemies = this.enemies
        // take item and push it into powers array
        enemies.push(item)

        li.innerText = item

        enemyList.appendChild(li)
    }

    displayHero() {
        const heroName = document.getElementById('heroName')
        const aliasName = document.getElementById('aliasName')
        const img = document.getElementById('heroImg')

        img.src = `images/${this.imgUrl}`
        img.alt = `${this.hero}`

        heroName.innerText = this.hero 
        aliasName.innerText = this.alias
    }
}

const superman = new Superhero()

// console.log(superman)
superman.hero = 'Superman'
superman.alias = 'Clark Kent'
superman.imgUrl = 'superman.jpeg'
superman.displayHero()
superman.addPower('super strength')
superman.addPower('x-ray vision')
superman.addPower('super speed')

superman.addEnemy('Lex Luthor')
superman.addEnemy('Darkseid')