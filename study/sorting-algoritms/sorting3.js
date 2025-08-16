function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenar os elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

function heapSort(arr) {
    function heapify(arr, n, i) {
        let largest = i; // Inicializa o maior como raiz
        let left = 2 * i + 1; // esquerda = 2*i + 1
        let right = 2 * i + 2; // direita = 2*i + 2

        // Verifica se o filho esquerdo da raiz existe e é maior que a raiz
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        // Verifica se o filho direito da raiz existe e é maior que o maior até agora
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // Se o maior não for a raiz
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Troca

            // Heapify a raiz.
            heapify(arr, n, largest);
        }
    }

    let n = arr.length;

    // Constrói um maxheap.
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extrai elementos um por um
    for (let i = n - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]; // Troca
        heapify(arr, i, 0);
    }

    return arr;
}

let arr = [10, 7, 8, 9, 1, 5];
console.log(mergeSort(arr))
console.log(quickSort(arr))
console.log(heapSort(arr))