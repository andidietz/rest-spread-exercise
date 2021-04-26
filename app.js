const filterOutOdds = ((...nums) => nums.filter((num) => num % 2 === 0))

const findMin = ((...numbers) => Math.min(...numbers))

const mergeObjects = ((obj1, obj2) => ({...obj1, ...obj2}))

const doubleAndReturnArgs = ((arr, ...rest) => {
    const workingArr = rest.map(function(numb){
        return numb * 2})
    return [...arr, ...workingArr ]
  })

const removeRandom = (items => {
    const randNum = Math.floor(Math.random() * items.length)
    const itemsCopy = [...items]
    itemsCopy.splice(randNum, 1)
    return itemsCopy
})

const extend = ((array1, array2) => [...array1, ...array2])

const addKeyVal = ((obj, key, val) => {
    return {...obj,
    key: val}
})

const removeKey = ((obj, key) => {
    const newObj = {...obj}
    delete newObj.key
    return newObj
})

const combine = ((obj1, obj2) => ({...obj1, ...obj2}))

const update = ((obj, key, val) => {
    const newObj = {...obj}
    newObj[key] = val
    return newObj
})