---
layout: default
title: gambling
description: gambling explanation
permalink: /eco/gambling
parent: economy
---

# gambling

## maximum bet

your maximum bet is determined based on your prestige and whether or not you have voted. each prestige adds $**50k** to your maximum bet, with your vote status also adding $**50k** if you have voted.

you can view your maximum bet with `$maxbet`

## card games

the card games included with nypsi have been made as realistic as possible, while also keeping them easy to play. card games will use 1 standard deck of cards, shuffled using the [shuffle-array](https://www.npmjs.com/package/shuffle-array) npm library.

when a card is chosen for either the player or the dealer, the card chosen is the first in the array (list), just like how you would take the first card from a real deck of playing cards.

## earning xp

to earn xp you must bet a minimum amount. this amount can be seen with `$minbet`, and it changes depending on your prestige. your prestige can also effect how much xp you are able to earn per game, up to a maximum of 5xp per win.