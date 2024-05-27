package tree

import (
	"bytes"
	"io"
	"os"
	"testing"
)

func TestNewWithValidInput(t *testing.T) {
	treeArr := []int{1, 2, 3, 4, 5, 6, 7}
	root := New(treeArr)

	if root.Val != 1 {
		t.Errorf("Expected root value to be 1, got %d", root.Val)
	}

	if root.Left.Val != 2 {
		t.Errorf("Expected left child value to be 2, got %d", root.Left.Val)
	}

	if root.Right.Val != 3 {
		t.Errorf("Expected right child value to be 3, got %d", root.Right.Val)
	}
}

func TestNewWithEmptyInput(t *testing.T) {
	treeArr := []int{}
	root := New(treeArr)

	if root != nil {
		t.Errorf("Expected root to be nil, got %v", root)
	}
}

func TestNewWithSingleElement(t *testing.T) {
	treeArr := []int{1}
	root := New(treeArr)

	if root.Val != 1 {
		t.Errorf("Expected root value to be 1, got %d", root.Val)
	}

	if root.Left != nil {
		t.Errorf("Expected left child to be nil, got %v", root.Left)
	}

	if root.Right != nil {
		t.Errorf("Expected right child to be nil, got %v", root.Right)
	}
}

func TestBSFWithValidInput(t *testing.T) {
	treeArr := []int{1, 2, 3, 4, 5, 6, 7}
	root := New(treeArr)

	// Capture the standard output
	old := os.Stdout
	r, w, _ := os.Pipe()
	os.Stdout = w

	BSF(root)

	// Read the standard output
	outC := make(chan string)
	go func() {
		var buf bytes.Buffer
		io.Copy(&buf, r)
		outC <- buf.String()
	}()
	w.Close()
	os.Stdout = old
	out := <-outC

	expected := "1234567"
	if out != expected {
		t.Errorf("Expected output to be %s, got %s", expected, out)
	}
}

func TestNewEdgeCase1(t *testing.T) {
	treeArr := []int{5, 1, 4, 0, 0, 3, 6}
	root := New(treeArr)

	// Capture the standard output
	old := os.Stdout
	r, w, _ := os.Pipe()
	os.Stdout = w

	BSF(root)

	// Read the standard output
	outC := make(chan string)
	go func() {
		var buf bytes.Buffer
		io.Copy(&buf, r)
		outC <- buf.String()
	}()
	w.Close()
	os.Stdout = old
	out := <-outC

	expected := "51436"
	if out != expected {
		t.Errorf("Expected output to be %s, got %s", expected, out)
	}
}

func TestNewEdgeCase2(t *testing.T) {
	treeArr := []int{5, 0, 1, 0, 0, 4, 1, 0, 0, 0, 0, 5, 0, 0, 6}
	root := New(treeArr)

	// Capture the standard output
	old := os.Stdout
	r, w, _ := os.Pipe()
	os.Stdout = w

	BSF(root)

	// Read the standard output
	outC := make(chan string)
	go func() {
		var buf bytes.Buffer
		io.Copy(&buf, r)
		outC <- buf.String()
	}()
	w.Close()
	os.Stdout = old
	out := <-outC

	expected := "514156"
	if out != expected {
		t.Errorf("Expected output to be %s, got %s", expected, out)
	}
}
