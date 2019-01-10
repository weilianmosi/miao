var weilianmosi = {
  chunk: function chunk(ary, size = 1) {
    var result = []
    for(var i = 0; i< ??; i++) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },
  compact: function(ary) {
    var result = []
    for(var item of ary) {
      if (item) {
        result.push(item)
      }
    }
    return result
  }
}


var weilianmosi = function(){

  function chunk(ary, size = 1) {
    
  }
  function compact(ary) {

  }

  return {
    chunk: chunk,
    compact: compact,
  }
}()
