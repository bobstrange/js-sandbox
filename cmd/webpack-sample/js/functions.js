import $ from 'jquery'

const one = () => {
  $('body').append(`
    <p id="first">
      First.js by jQuery
    </p>
  `)
}

const two = () => {
  $('body').append(`
    <p id="second">
      Second.js by jQuery
    </p>
  `)
}

const three = () => {
  $('body').append(`
    <p id="third">
      Third.js by jQuery
    </p>
  `)
}

export {
  one,
  two,
  three
}
