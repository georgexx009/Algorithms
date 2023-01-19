package main

import "fmt"

func main() {
	fmt.Println("expected [3,7,10]")
	sl := createSlice(5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3)
	fmt.Println(sl)
	fmt.Println(topKFrequent(sl, 3))
}

func createSlice(nums ...int) []int {
	return nums
}

func topKFrequent(nums []int, k int) []int {
	freq := getFrequencies(nums)
	fmt.Print("working with")
	fmt.Println(freq)

	var heap []int

	for num := range freq {
		fmt.Println("num: ", num)
		if len(heap) < k {
			heap = insert(heap, freq, num)
			continue
		}

		if freq[num] > freq[heap[0]] {
			heap = deleteRoot(heap, freq)
			heap = insert(heap, freq, num)
		}
	}

	return heap
}

func getFrequencies(nums []int) map[int]int {
	freq := make(map[int]int)

	for _, num := range nums {
		if _, ok := freq[num]; ok {
			freq[num] = freq[num] + 1
			continue
		}

		freq[num] = 1
	}

	return freq
}

func insert(heap []int, m map[int]int, newNum int) []int {
	heap = append(heap, newNum)
	currentIdx := len(heap) - 1
	parentIdx := getIdxParent(currentIdx)
	for currentIdx > parentIdx {
		if m[heap[currentIdx]] < m[heap[parentIdx]] {
			currentNum := heap[currentIdx]
			heap[currentIdx] = heap[parentIdx]
			heap[parentIdx] = currentNum
			currentIdx = parentIdx
			parentIdx = getIdxParent(currentIdx)
			continue
		}
		break
	}
	return heap
}

func getIdxParent(i int) int {
	if i == 0 {
		return 0
	}
	return (i - 1) >> 1
}

func deleteRoot(heap []int, freq map[int]int) []int {
	heap[0] = heap[len(heap)-1]
	heap = heap[:len(heap)-1]

	currentNodeIdx := 0

	for getLeftChild(currentNodeIdx) < len(heap) {
		smallestNodeIdx := currentNodeIdx

		if freq[heap[smallestNodeIdx]] > freq[heap[getLeftChild(currentNodeIdx)]] {
			smallestNodeIdx = getLeftChild(currentNodeIdx)
		}
		if getRightChild(currentNodeIdx) < len(heap) && freq[heap[smallestNodeIdx]] > freq[heap[getRightChild(currentNodeIdx)]] {
			smallestNodeIdx = getRightChild(currentNodeIdx)
		}

		if smallestNodeIdx != currentNodeIdx {
			smallestNum := heap[smallestNodeIdx]
			heap[smallestNodeIdx] = heap[currentNodeIdx]
			heap[currentNodeIdx] = smallestNum

			currentNodeIdx = smallestNodeIdx
		} else {
			break
		}
	}
	return heap
}

func getLeftChild(i int) int {
	return i*2 + 1
}

func getRightChild(i int) int {
	return i*2 + 2
}
