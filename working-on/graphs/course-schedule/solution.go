package main

import "fmt"

func main() {
	fmt.Println("running course-schedule solution")

	var p1 [][]int
	p1 = append(p1, []int{1, 4})
	p1 = append(p1, []int{2, 4})
	p1 = append(p1, []int{3, 1})
	p1 = append(p1, []int{3, 2})

	fmt.Println("should be true, no cycle")
	log("prerequesites", p1)
	fmt.Println(canFinish(5, p1))
}

func canFinish(numCourses int, prerequisites [][]int) bool {
	inDegree := make([]int, numCourses)

	for _, p := range prerequisites {
		inDegree[p[0]]++
	}

	log("inDegree filled", inDegree)

	var zeroDegrees []int
	for i, inDegreeVertex := range inDegree {
		if inDegreeVertex == 0 {
			zeroDegrees = append(zeroDegrees, i)
		}
	}

	if len(zeroDegrees) == 0 {
		log("none zero degrees", zeroDegrees)
		return false
	}

	for len(zeroDegrees) > 0 {
		log("zero degrees before removing: ", zeroDegrees)

		var zeroDegreeVertex int
		zeroDegrees, zeroDegreeVertex = getAndRemoveElement(zeroDegrees, 0)

		log("zero degrees after removing: ", zeroDegrees)

		for _, p := range prerequisites {
			if p[1] == zeroDegreeVertex {
				inDegree[p[0]]--

				if inDegree[p[0]] == 0 {
					zeroDegrees = append(zeroDegrees, p[0])
				}
			}
		}
	}

	for _, id := range inDegree {
		if id != 0 {
			log("remain degrees", inDegree)
			return false
		}
	}

	return true
}

func getAndRemoveElement(slice []int, i int) ([]int, int) {
	elementRemoved := slice[i]
	newSlice := append(slice[:i], slice[i+1:]...)
	return newSlice, elementRemoved
}

func log(msg string, obj interface{}) {
	fmt.Print(msg)
	fmt.Println(obj)
	fmt.Println("------------------------------")
}
