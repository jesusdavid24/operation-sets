const a = [1,2,3];
const b = [3,5,6];

const merged = [...a, ...b]

const validateFields = () => {
    if (!a.length || !b.length) {
      console.log('Debes ingresar los valores de los conjuntos A y B');
      return false;
    }
    return true;
  };
  

const joinSets = () => {
    if(!validateFields()){
        return;
    }
    console.log('AUB = ' + '{'+[...new Set(a.concat(b))]+'}')
}

const intersectionSets = () => {
    if(!validateFields()){
        return;
    }
    console.log('A⋂B = ' + '{'+a.filter(el => b.includes(el))+'}')
}

const differenceSets = () => {
    if(!validateFields()){
        return;
    }
    console.log('A-B = ' + '{'+a.filter(el => !b.includes(el))+'}')
    console.log('B-A = ' + '{'+b.filter(el => !a.includes(el))+'}')
}

const differenceSimetric = () => {
    if(!validateFields()){
        return;
    }
    console.log('A∆B = ' + '{'+merged.filter((x) => merged.filter((y) => y === x).length <= 1)+'}')
}

joinSets()
intersectionSets()
differenceSets()
differenceSimetric()
