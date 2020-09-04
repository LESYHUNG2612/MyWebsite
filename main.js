
// dùng javascript định dạng số biết nói
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 20)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        let inc = Math.ceil(finalNumber / (duration / 20))
        // 60 là thời gian delay
        if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          clearInterval(interval)
        } else {
          currentNumber += inc
        }
        callback(currentNumber)
      }
    }
  }
// goi các id của số biết nói
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(1240, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('Noi').innerText = formattedNumber
    })
    
    animateNumber(2600, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('Noi1').innerText = formattedNumber
    })
    
    animateNumber(1650, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('Noi2').innerText = formattedNumber
    })
    animateNumber(9870, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('Noi3').innerText = formattedNumber
      })
  })
