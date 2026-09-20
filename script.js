const skills = ['HTML', 'CSS', 'JavaScript'];

function listSkills(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Skill ${i + 1}: ${arr[i]}`);
  }
}

listSkills(skills);
