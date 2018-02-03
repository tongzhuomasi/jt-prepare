let name = 'a'
import (`./jt-01-module${name}.js`)
  .then((JT) => JT.funct())
  .catch((err) => console.log(err))



