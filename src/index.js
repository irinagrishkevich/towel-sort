// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (typeof matrix === 'undefined') {
    return []
  } else {
    const res = []
    if (matrix.length > 0) {
      let result
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 1) {
          matrix[i].reverse()
        }
        result = matrix.concat()
      }
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
          res.push(result[i][j])
        }
      }
      return res
    } else {
      return []
    }
  }
}
