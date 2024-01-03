package main

import (
	"fmt"
	"math/rand"
  "time"
)

func main() {
  setRandomSeed()
  holes := setUpGame()
  found := findRabbit(holes)
  fmt.Println("rabbit found in ", found)
}

/*
   100 holes in a line, and there is a rabbit hiding in one of the holes

   you can only look in one hole at a time,
   and every time you look in a hole,
   the rabbit jumps to an adjacent hole
   find the rabbit
*/

var random *rand.Rand

func setRandomSeed() {
  source := rand.NewSource(time.Now().UnixNano())
  r := rand.New(source)
  random = r
}

func setUpGame() []int {
  holes := createHoles()
  return holes
}

func testGameRules() {
  holes := createHoles()
  printHoles(holes)
  rabbitJump(holes, RABBIT_HOLE)
  printHoles(holes)
  rabbitJump(holes, RABBIT_HOLE)
  printHoles(holes)
}

var NUM_OF_HOLES int = 10
var RABBIT_HOLE = -1

func printHoles(holes []int) {
  for _, i := range holes {
    if i == 0 {
      fmt.Print("_ ")
    } else {
      fmt.Print("! ")
    }
  }
  fmt.Println()

  for i := range holes {
    fmt.Print(i)
    fmt.Print(" ")
  }
  fmt.Println()
}

func createHoles() []int {
  holes := make([]int, NUM_OF_HOLES)
  rabbit := random.Intn(NUM_OF_HOLES)
  holes[rabbit] = 1
  RABBIT_HOLE = rabbit
  return holes
}

func rabbitJump(holes []int, rabbitPosition int) {
  left := 1
  move := random.Intn(2)
  if (rabbitPosition+1 == len(holes) || (move == left && rabbitPosition != 0)) {
    holes[rabbitPosition-1] = 1
    RABBIT_HOLE--
  } else {
    holes[rabbitPosition+1] = 1
    RABBIT_HOLE++
  }
  holes[rabbitPosition] = 0
}


func findRabbit(holes []int) int {
  for i, hole := range holes {
    printHoles(holes)
    if hole == 1 {
      return i
    }
    // if you do this, then the rabbit will jump again
    if i != 0 {
      if holes[i-1] == 1 {
        return i-1
      }
    }
    rabbitJump(holes, RABBIT_HOLE)
  }

  return -1
}
