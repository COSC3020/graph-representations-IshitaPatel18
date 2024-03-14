[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

My answer:

There are two for loops, the outer loop will iterate over the rows and the
inner loop will iterate over the columns/each element in the row. Since this
is an adjaceny matrix we are iterating over to convert into a list, we are
technically iterating over the number of vertices twice as the row for loop
will go over each vertex and compare it to every other vertex to look for an edge.
So both for loops iterate for the number of vertices or |V| and because they are nested
we multiply both |V|'s to get $|V|^2$. The runtime complexity would then be $\Theta(|V|^2)$.
The conversion algorithm only really depends on the number of vertices because
it is iterating over all the vertices twice to compare one to another to find
if they share an edge.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
