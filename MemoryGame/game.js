document.addEventListener("DOMContentLoaded", () => {
    // Properties

    const cardsData = [
        {
            name: "fries",
            image: "./images/fries.png",
        },
        {
            name: "cheeseburger",
            image: "./images/cheeseburger.png",
        },
        {
            name: "hotdog",
            image: "./images/hotdog.png",
        },
        {
            name: "ice-cream",
            image: "./images/ice-cream.png",
        },
        {
            name: "milkshake",
            image: "./images/milkshake.png",
        },
        {
            name: "pizza",
            image: "./images/pizza.png",
        },
        {
            name: "fries",
            image: "./images/fries.png",
        },
        {
            name: "cheeseburger",
            image: "./images/cheeseburger.png",
        },
        {
            name: "hotdog",
            image: "./images/hotdog.png",
        },
        {
            name: "ice-cream",
            image: "./images/ice-cream.png",
        },
        {
            name: "milkshake",
            image: "./images/milkshake.png",
        },
        {
            name: "pizza",
            image: "./images/pizza.png",
        },
    ]

    const shuffledCards = cardsData.sort(() => 0.5 - Math.random())
    const grid = document.querySelector(".grid")
    const result = document.querySelector("#result")
    let selectedCards = []
    let selectedCardIds = []
    let cardsWon = []

    // Init

    init()

    function init() {
        makeGame()
    }

    // Methods

    function makeGame() {
        for (let i = 0; i < shuffledCards.length; i++) {
            const card = document.createElement("img")
            card.setAttribute("src", "images/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", selectCard)
            grid.append(card)
        }
    }

    function selectCard() {
        const id = this.getAttribute("data-id")
        selectedCards.push(shuffledCards[id].name)
        selectedCardIds.push(id)
        this.setAttribute("src", shuffledCards[id].image)

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

    function checkMatch() {
        const cardToCheck = document.querySelectorAll("img")
        const firstSelect = cardToCheck[selectedCardIds[0]]
        const secondSelect = cardToCheck[selectedCardIds[1]]

        if (firstSelect === secondSelect) {
            resetCardsToBlank(firstSelect, secondSelect)
        }

        if (selectedCards[0] === selectedCards[1]) {
            clearCards(firstSelect, secondSelect)
            cardsWon.push(selectedCards)
            result.innerHTML = cardsWon.length
        } else {
            resetCardsToBlank(firstSelect, secondSelect)
        }

        selectedCards = []
        selectedCardIds = []

        if (cardsWon.length === shuffledCards.length / 2) {
            result.innerHTML = `Congratulations! Total score: ${cardsWon.length}`
        }
    }

    // Helper methods

    function resetCardsToBlank(card1, card2) {
        card1.setAttribute("src", "images/blank.png")
        card2.setAttribute("src", "images/blank.png")
    }

    function clearCards(card1, card2) {
        card1.setAttribute("src", "images/white.png")
        card2.setAttribute("src", "images/white.png")
        card1.removeEventListener("click", selectCard)
        card2.removeEventListener("click", selectCard)
    }
})
