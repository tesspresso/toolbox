const solution = (symptoms) => {
  let symptomsExpanded = []
  for (let i = 0; i < symptoms.length; i++){
    let obj = {};
    obj.value = symptoms[i]
    obj.text = symptoms[i]
    symptomsExpanded.push(obj);
  }
  return symptomsExpanded
}

export default solution
