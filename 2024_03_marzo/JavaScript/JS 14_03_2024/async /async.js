fetch("https://thronesapi.com/api/v2/Characters")
  .then((res) => res.json())
  .then((res) => console.log(res));


const funcionAsync = async () => {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const characters = await res.json()
    console.log(characters);
}

funcionAsync()