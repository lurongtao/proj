// console.time('test')
// setTimeout(() => {
//   console.log(0)
//   console.timeEnd('test')
// }, 0)
// console.log(1)

let foo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, 1000)
  })
}

let foo2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, 1000)
  })
}

let foo3 = () => {
  return fetch('/v2/movie/in_theaters')
    .then((response) => response.json())
    .then((result) => {
      return result
    })
}

let foo4 = () => {
  return $.ajax({
    url: '/v2/movie/top250',
    success: (result) => {
      return result
    }
  })
}

// foo().then((result) => {
//   console.log(result)
// })

let fzz = async () => {
  console.log(await foo())
  console.log(await foo2())
  console.log(await foo3())
  console.log(await foo4())
  console.log(0)
}
fzz()
