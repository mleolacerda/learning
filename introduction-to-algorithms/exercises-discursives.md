# learning

A repository dedicated to documenting my journey learning to program.

# INTRODUCTION TO ALGORITHMS

## CAPÍTULO 1 - The Role of Algorithms in Computing

- 1.1-1: Give a real-world example that requires sorting or a real-world example that re-
quires computing a convex hull.  
R: A ordenação de amnoácidos é necessária para produzir proteínas específicas em laboratório. O livre caminho médio, por definição, é um invólucro convexo, pois representa o mínimo conjunto de pontos que formam o espaço ao redor de um gás ideal para que o mesmo não colida com outra molécula, contendo todo segmento de reta a qual une dois pontos desse espaço.

- 1.1-2: Other than speed, what other measures of efficiency might one use in a real-world
setting?  
R: Além da velocidade, o espaço ocupado pelo processamento dos dados e o gasto energético para manter o funcionamento do algoritmo são critérios importantes quando mensuramos a eficiência.

- 1.1-3: Select a data structure that you have seen previously, and discuss its strengths and
limitations.  
R: Grafo. Vantagens: permite verificar como os dados se relacionam; descreve muitas situações cotidianas. Desvantagens: problemas envolvendo grafos podem se tornar muito complexos; conjuntos de dados maiores são mais difíceis de analisar e armazenar quando são organizados em grafos.

- 1.1-4: How are the shortest-path and traveling-salesman problems given above similar?
How are they different?  
R: O problema do caminho mais curto e do vendedor viajante são semelhantes no que diz que respeito à encontrar um algoritmo que forneça a melhor rota em um grafo. A diferença surge na definição de "melhor rota" para cada um dos problemas. O primeiro está interessado na menor rota entre dois pontos independente de quais sejam eles. Para o segundo, os pontos pelos quais o vendedor deve passar são importantes, sendo que ele deve percorrer o menor caminho que passa por todos os pontos de interesse particular.

- 1.1-5: Come up with a real-world problem in which only the best solution will do. Then
come up with one in which a solution that is “approximately” the best is good
enough.  
R: Bancos, lojas online ou qualquer outro software que guarde informações pessoais dos usuários, exigem algoritmos de encriptação e de segurança de dados que funcionem da melhor maneira possível. Mapas e softwares de geolocalização utilizam algoritmos bons o suficiente para determinar a "melhor rota" entre dois lugares, haja vista que esse problema da rota pode se tornar muito complexo e os usuários não exigem muita precisão para o uso cotidiano. 

- 1.2-1: Give an example of an application that requires algorithmic content at the applica-
tion level, and discuss the function of the algorithms involved.  
R: Softwares que fazem o processamento de dados geográficos para produzir mapas. Existem algoritmos que fazem a interpolação dos dados para produzir escalas.

- 1.2-2: Suppose we are comparing implementations of insertion sort and merge sort on the
same machine. For inputs of size n, insertion sort runs in 8n^2 steps, while merge
sort runs in 64n lg n steps. For which values of n does insertion sort beat merge
sort?  
R: Uma insertion sort é mais eficiente do que uma merge sort para valores de n estritamente menores do que 44.  
```
for (let n = 1; n <= 64; n++) {  
  let insertionSortTime = 8 * (n**2);  
  let mergeSortTime = 64 * n * Math.log2(n);  
  if (insertionSortTime > mergeSortTime) {  
    console.log(`insertion sort greater than merge sort for n equal to ${n}`);  
  }  
  else if (insertionSortTime == mergeSortTime) {  
    console.log(`insertion sort equal to merge sort for n equal to ${n}`);  
  } else {  
    console.log(`insertion sort smaller than merge sort for n equal to ${n}`);  
}
```  

- 1.2-3: What is the smallest value of n such that an algorithm whose running time is 100n^2
runs faster than an algorithm whose running time is 2n on the same machine?  
R: O primeiro algoritmo é mais rápido para valores de n estritamente menores do que 15.  
```
for (let n = 1; n <= 100; n++) {  
    let firstAlgorithm = 100 * (n**2);  
    let secondAlgorithm = 2**n;  
    if (firstAlgorithm > secondAlgorithm) {  
        console.log(`first algorithm greater than second algorithm for n equal to ${n}`);  
    }  
    else if (firstAlgorithm == secondAlgorithm) {  
        console.log(`first algorithm equal to second algorithm for n equal to ${n}`);  
    } else {  
        console.log(`first algorithm smaller than second algorithm for n equal to ${n}`);  
    }  
}  
```

Problem 1-1 Comparison of running times: Desnecessário.  

## CAPÍTULO 2 - Getting Started

- 2.1-1: Using Figure 2.2 as a model, illustrate the operation of INSERTION-SORT on the
array A D h31; 41; 59; 26; 41; 58i.  
R: Desnecessário  

- 2.1-2: Rewrite the INSERTION-SORT procedure to sort into nonincreasing instead of non-
decreasing order.  
R:  

```
function insertionSort(array) {
    for (let j = 0; j < array.length; j++) {
        let element = array[j];
        let i = j - 1;
        
        while (array[i] < element && i >= 0) {
            array[i + 1] = array[i];
            i = i - 1;
        }
        
        array[i + 1] = element;
    }
    
    return array;
}
```

- 2.1-3: Write a pseudocode for linear search. Using a loop invariant, prove that your algorithm is correct.  
R:  

```
function  linearSearch(array, value) {
    let position = [];
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            position.push(i);
        }
    }
    if (position.length === 0) {
        return console.log(`This value doesn't exist in that sequence`);
    }

    return console.log(`The value was found in position ${position}`);
}

```
