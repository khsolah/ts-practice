import chalk from 'chalk'

const arr: number[] = [8, 6, 1, 10, 5, 3, 7, 2, 9, 4]

const quicksort = (arr: number[], left: number, right: number) => {
  if (left >= right) return
  let i = left,
    j = right,
    key = arr[left]

  while (i !== j) {
    while (arr[j] > key && i < j) j--
    while (arr[i] <= key && i < j) i++

    if (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  ;[arr[left], arr[i]] = [arr[i], arr[left]]

  quicksort(arr, left, i - 1)
  quicksort(arr, i + 1, right)
}

quicksort(arr, 0, arr.length - 1)
console.log(arr)
