console.log("hello world");
console.log(axios);

const ulElement = document.getElementById("trees");

const URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&q=&rows=100&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";



axios
.get(URL)
.then((res) => {
    console.log(res);
    console.log(res.data.records);
    displayResults(res.data.records);
})
.catch((err) => {
    console.error(err);
});

function displayResults(list) {
    list.forEach((item) => {
        ulElement.innerHTML = ulElement.innerHTML + `<li> ${item.fields.espece}</li>`
    });
}