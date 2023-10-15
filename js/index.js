let array = [5, 6, 4, 3, 1, 2, 7]
console.log('Изначальный массив:', array)
array.sort(function(a, b) {
    return a-b
})
console.log('Отсортированный массив:', array)

array.splice(1, 3) 

console.log('Отсортированный массив после удаления:', array)





