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
  function join (array, separator = ',') {
    var result = ''
    for (var i = 0; i < array.length - 1; i++) {
      result += array[i] + '' +  separator
    }
    result = result + array[i]
    return result
  }
  function last(array) {
    return array.pop()
  }
  function lastIndexOf(array,value,fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i 
      }
    }
    return -1
  }
  function nth(array, n = 0) {
    n = Math.abs(n)
    if ( n >= array.length) {
      return undefined
    } else {
      return array[n]
    }
  }
  function pull(array ,...value) {
    var b = 0
    var array1 = []
    var flag = true
     for (var i = 0; i < array.length; i++) {
        for (var j of value){
          if (array[i] == j){
            flag = false
             break   
          } else {
            flag = true
          }
        }
        if (flag) {
          array[b] = array[i]
          b++
        }
        
     }
     array.splice(b)
     return array
  }
  function pullAll(array, values) {
    var b = 0
    var array1 = []
    var flag = true
     for (var i = 0; i < array.length; i++) {
        for (var j of values){
          if (array[i] == j){
            flag = false
             break   
          } else {
            flag = true
          }
        }
        if (flag) {
          array[b] = array[i]
          b++
        }
        
     }
     array.splice(b)
     return array
  }
  // function difference (array, values) {
  //   var result = []
  //   var map = {}

  // }
  function reverse(array) {
    var l = array.length
    for (var i = 0; i < Math.floor(l / 2); i++) {
        let tmp = array[l - 1 - i]
        array[l - 1 - i] = a[i] 
        array[i] = tmp
    }
    return array
  }
  function sortedIndex(array,value) {
    var l = 0
    var r = array.length - 1
    if (array[l] >= value) {
      array.unshift(value)
    } else if(array[r] <= value) {
      array.push(value)
    } else {
        while (l != r) {
        if (array[l] < value) {
          l++
        } else if (array[r] >= value) {
          r--
        } 
      }
        var arr = array.slice(l)
        array[l] = value 
        var array = array.concat(arr)
    }
    return array.indexOf(value)
  }
  function sortedIndexOf(ary,value) {
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] === value) {
        return i
      }
    }
    return -1
  }
  function sortedLastIndex(ary,value) {
    ary.push(value)
    ary.sort((a,b) => a - b) 
    for (var i = ary.length; i >= 0; i--) {
      if (ary[i] == value) {
        return i 
      }
    }
    return -1
  }
  function sortedLastIndexOf(ary,value) {
    for (var i = ary.length - 1; i >= 0; i--) {
      if (ary[i] === value) {
        return i 
      }
    }
    return -1
  }
  function sortedUniq(ary) {
    var result = []
    for (var i = 0; i < ary.length; i += c) {
      var c = 1
      for (var j = i + 1; j < ary.length; j++) {
        if (ary[i] == ary[j]) {
          c++
          continue
        } else {
          result.push(ary[i])
          break
        }
      }
    }
    result.push(ary[ary.length - 1])
    return result
  }
  function tail(ary) {
    return ary.slice(1)
  }
  function take(ary, n = 1) {
    var result = []
    if (n >= ary.length) {
      n = ary.length
    }
    for (var i = 0; i < n; i++) {
      result.push(ary[i])
    }
    return result
  }
  function takeRight (ary, n = 1) {
    var result = []
    if (n >= ary.length) {
       n = 0
    } else {
       n = ary.length - n
    }
    return ary.slice(n)
  }
  function union (...arrays) {
    var result = []
    for (var item of arrays) {
      for (var i = 0; i < item.length; i++) {
        result.push(item[i])
      }
    }
    var map = {}
    var a = []
    for (var i = 0; i < result.length; i++) {
      if (!(result[i] in map)) {
          a.push(result[i])
          map[result[i]] = 1
      }
    }
    return a
  }
  function uniq(array) {
    var map = {}
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (!(array[i] in map)) {
          result.push(array[i])
          map[array[i]] = 1
      }
    }
    return result
  }
  function unzip(array) {
    var result = []
    for (var i = 0; i < array[0].length; i++) {
      var arr = []
      for (var j = 0; j < array.length; j++) {
        arr.push(array[j][i])
      }
      result.push(arr)
    }
    return result
  }
  function without (array,...values) {
    var result = []
    var map = {}
    for (var i = 0; i < values.length; i++) {
      if (!(values[i] in map)) {
        map[values[i]] = 1
      }
    }
    for (var item of array) {
      if (!(item in map)) {
        result.push(item)
      }
    }
    return result
  }
  function xor(...arrays) {
    var result = []
    var arr = []
    var map = {}
    for (var item of arrays) {
      for (var i = 0; i < item.length; i++) {
        arr.push(item[i])
        if (item[i] in map) {
          map[item[i]]++
        } else {
          map[item[i]] = 1
        }
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (map[arr[i]] == 1) {
        result.push(arr[i])
      }
    }
    return result
  }
  function zip (...arrays) {
    var result = []
    for (var i = 0; i < arrays[0].length; i++) {
      var arr = []
      for (var item of arrays) {
        arr.push(item[i])
      }
      result.push(arr)
    }
    return result
  }
  return {
    chunk: chunk,
    compact: compact,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    nth: nth,
    pull: pull,
    pullAll: pullAll,
    sortedIndex: sortedIndex,
    sortedIndexOf: sortedIndexOf,
    sortedLastIndex: sortedLastIndex,
    sortedLastIndexOf: sortedLastIndexOf,
    sortedUniq: sortedUniq,
    tail: tail,
    take: take,
    takeRight: takeRight,
    union: union,
    uniq: uniq,
    unzip: unzip,
    without: without,
    xor: xor,
    zip: zip,
  }
}()



