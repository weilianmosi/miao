var weilianmosi = function(){
  function chunk(ary, size = 1) {
    if (ary.length <= size) {
      return ary
    }
    var result = []
    result.push(ary.splice(0,size))
    result.push(chunk(ary,size))
    return result
  }
  function compact(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }
  function drop (array, n = 1) {
    
    for (var i = 0; i < n; i++) {
      array.shift()
    }
    return array
  }
  function dropRight(array,n = 1) {
    for (var i = 0; i < n; i++) {
      array.pop()
    }
    return array
  }
  function fill (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }
  function flatten(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      result = result.concat(array[i])
    }
    return result
  }
  function flattenDeep(array) {
    var result = []
    for (var item of array) {
      if (Array.isArray(item)) {
        result.push(...flattenDeep(item))
      } else {
        result.push(item)
      }
    }
    return result
  }
  function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return array.slice()
    }
    return array.reduce((result,item) => {
      if (Array.isArray(item)) {
        result.push(...flattenDepth(item, depth - 1))
      } else {
        result.push(item)
      }
      return result
    },[])
  }
  function fromPairs(pairs) {
    var obj = {}
    for (var i = 0; i < pairs.length; i++) {
      obj[pairs[i][0]] = pairs[i][1]
    }
    return obj
  }
  function head(array) {
    if (array.length > 0) {
      return array[0]
    } else {
      return undefined
    }
  }
  function indexOf(array, value, fromIndex = 0) {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i] == value) {
          return i 
        }
      }
      return -1
  }
  function initial(array) {
     array.pop()
     return array
  }
  function intersection(...arrays) {
    var result = []
    var map = {}
    for (let item of arrays) {
      for (let i of item) {
        if (i in map) {
          map[i]++
        } else {
          map[i] = 1
        }
      }
    }
    for (var j = 0; j < arrays[0].length; j++) {
      if (map[arrays[0][j]] > 1) {
        result.push(arrays[0][j])
      }
    }
    return result
  }
  return {
    chunk: chunk,
    compact: compact,
    drop: drop,
    dropRight: dropRight,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
  }
}()



