package climbingstairs

import "testing"

func TestClimbStairs(t *testing.T) {
    tests := []struct {
        name string
        n    int
        want int
    }{
        {
            name: "Test 1",
            n:    1,
            want: 1,
        },
        {
            name: "Test 2",
            n:    2,
            want: 2,
        },
        {
            name: "Test 3",
            n:    3,
            want: 3,
        },
        {
            name: "Test 4",
            n:    4,
            want: 5,
        },
        {
            name: "Test 5",
            n:    5,
            want: 8,
        },
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            if got := ClimbStairs(tt.n); got != tt.want {
                t.Errorf("ClimbStairs() = %v, want %v", got, tt.want)
            }
        })
    }
}

