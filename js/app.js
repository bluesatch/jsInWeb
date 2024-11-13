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
 */

class Superhero {
    constructor() {
        // refactoring
        // this.hero,
        // this.alias,
        // this.powers = [],
        // this.enemies = [],
        // this.imgUrl
        this.hero = {
            heroName: '',
            aliasName: '',
            isHero: 'hero' || 'villain',
            universe: 'marvel' || 'dc',
            powers: [],
            enemies: [],
            imgUrl: ''
        }
    }
    // end constructor

    // init or initializer
    init() {
        // console.log('initialized')
        const hero = this.hero 
        // console.log(hero)
        this.getData(hero)
    }

    // collect data from the form
    getData(obj) {
        // set inputs
        const heroInput = document.getElementById('heroInput')
        const aliasInput = document.getElementById('aliasInput')
        const power1 = document.getElementById('power1').value || null
        const power2 = document.getElementById('power2').value || null
        const power3 = document.getElementById('power3').value || null
        const enemy1 = document.getElementById('enemy1').value || null
        const enemy2 = document.getElementById('enemy2').value || null
        const enemy3 = document.getElementById('enemy3').value || null 

        // store values in obj
        obj.heroName = heroInput.value 
        obj.aliasName = aliasInput.value

        // radio buttons
        obj.isHero = document.querySelector('input[name=isHero]:checked').value
        obj.universe = document.querySelector('input[name=universe]:checked').value 

        // add items to array
        obj.powers = [...obj.powers,power1, power2, power3]
        obj.enemies = [...obj.enemies, enemy1, enemy2, enemy3]
        
        console.log(obj)
    }
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

// const superman = new Superhero()

// console.log(superman)
// superman.hero = 'Superman'
// superman.alias = 'Clark Kent'
// superman.imgUrl = 'superman.jpeg'
// superman.displayHero()
// superman.addPower('super strength')
// superman.addPower('x-ray vision')
// superman.addPower('super speed')

// superman.addEnemy('Lex Luthor')
// superman.addEnemy('Darkseid')

// An event is any interaction between the user and the browser

/**
 * Syntax:
 * 
 *      element.addEventListener(event, callback function)
 */
const action = new Superhero()

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    action.init()

})

// spread operator
// const scores = [100, 100, 94, 52, 100, 98]
// console.log(scores)

// console.log(...scores)

// const newScores = [...scores, 78]
// console.log(`scores: ${scores}`)
// console.log(`newScores: ${newScores}`);