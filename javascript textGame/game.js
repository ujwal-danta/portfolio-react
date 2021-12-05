const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'CoronaVirus has shut down the world. You are a medical store owner. You are having fever........',
    options: [
      {
        text: 'I may be suffering from Covid', // take the goo
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Its just fever. I will ignore it',// leave the goo
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You venture forth in search of answers to what are you are suffering from. You went to a doctor . Doctor told you that are suffering from covid', //You venture forth in search of answers to where you are when you come across a merchant.
    options: [
      {
        text: 'Agree to what the doctor says...',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Ignore the doctor',//Ignore the merchant
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: "You leave the doctor's clinic . You decide whether to go back home", //After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.
    options: [
      {
        text: 'Ofcourse! why will i not head back home',//explore the castle
        nextText: 4
      },
      {
        text: 'I will not head back home. I will go to my medical shop and take some medicines but i will not go to any covid health center and isolate myself till i get well',//Find a room to sleep at in the town
        nextText: 5
      },
      {
        text: 'Go to a covid health care center',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You were very careless ヽ(ಠ_ಠ)ノ. Your entire family got affected by covid. You and your entire family died (⌣́_⌣̀) ',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Your medicines were unable to save you(⌣́_⌣̀) . But you did the right thing by isolating yourself . You saved your family',//Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You were able to save yourself as well as your Family . Congratulations you are champ ❣◕ ‿ ◕❣',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
]

startGame()
