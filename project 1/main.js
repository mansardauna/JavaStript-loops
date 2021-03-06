Function isPrimeNo(x) {
  if (x === 0 || x === 1) return false
  for (i = x - 1; i > 1; i--) {
    if (x % i === 0) return false
  }
  return true
}

const colors = {
  red: '#fd5e53',
  yellow: '#fddb3a',
  green: '#21bf73'
}
const containerEl = document.createElement('div')
containerEl.setAttribute('id', 'container')
containerEl.style.display = 'grid'
containerEl.style.gridTemplateColumns = 'repeat(6, 1fr)';
containerEl.style.maxWidth = '50rem';
containerEl.style.margin = 'auto';
containerEl.style.gridGap = '5px';

Array.from(Array(102).keys()).forEach(num => {
  const numEl = document.createElement('div')
  numEl.style.height = '5rem'
  numEl.style.display = 'grid'
  numEl.style.placeItems = 'center'
  numEl.style.color = 'white'
  numEl.style.fontSize = '1.5rem'
  numEl.style.fontWeight = 600
  numEl.style.backgroundColor = isPrimeNo(num)
    ? colors.red
    : num % 2 ? colors.yellow : colors.green

  numEl.textContent = num
  containerEl.appendChild(numEl)
})

const bodyEl = document.querySelector('body')
bodyEl.style.fontFamily = 'Avenir, Sego UI, Ubuntu, Sans-serif'
bodyEl.appendChild(containerEl)