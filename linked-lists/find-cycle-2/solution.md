goal: return the node where the cycle begins, if there is no cycle return null.

The representation from the Linked list is through nodes point to the next node.

The solution is simple, traverse the linked list without recursion, and saved the visited
nodes, when it was already visited, that is the node where the cycle starts.

IMPORTANT: since the node value could be repeated, we could use a Map to save the node
as key. Like this we're comparing the reference to the node and not the value which
could be repeated.
