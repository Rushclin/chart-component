/* let fetchData = null
fetch("./../../data.json")
    .then((response) => response.json())
    .then((result) => {
        console.log("RESULTAT ", result)
        fetchData = result
        console.log("FET", fetchData)
    })
    .catch((error) => console.log(error)); */

/* async function getData() {
    const response = await fetch("./../../data.json");
    const json = await response.json();
    return json
}
let datas = getData()
let label = []

const setLabel = (l) => {
    label.push(l)
    console.log(l)
}



datas.then((res) => {
    res.map((item, i) => {
        console.log(item.day, "Index", i)
        /* label.push(item.day) 
        setLabel(item.day)
    })
}) */

let label = ["mon", "tue", "web", "thu", "fri", "sat", "sun"];

let itemData = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
console.log(itemData);

const data = {
    labels: label,
    datasets: [
        {
            data: itemData,
            backgroundColor: [
                "red",
                "hsl(10, 79%, 65%)",
                "hsl(186, 34%, 60%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
            ],
        },
    ],
};

const config = {
    type: "bar",
    data: data,
};

const chart = new Chart(document.getElementById("chart"), config);
