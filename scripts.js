const apiUrl = 'https://jsonplaceholder.typicode.com/comments'

axios.get(apiUrl,)
.then(response => {
    const comentElement = response.data // Aqui ta todo o meu Array
    const listElement = document.getElementById('listItem')
    var itemOption = ''
    const selectElement = document.getElementById('input')
    selectElement.onchange = function(){
        itemOption = this.value
        if(itemOption == ''){
            listElement.innerHTML = ''
        }
        else if(itemOption == 'postId'){
            listElement.innerHTML = ''
            comentElement.forEach(element => {
                const itemList = document.createElement('li')
                itemList.textContent = element.postId
                listElement.appendChild(itemList)
            });
        }else if(itemOption == 'name'){
            listElement.innerHTML = ''
            comentElement.forEach(element => {
                const itemList = document.createElement('li')
                itemList.textContent = element.name
                listElement.appendChild(itemList)
            });

        }else if(itemOption == 'email'){
            listElement.innerHTML = ''
            comentElement.forEach(element => {
                const itemList = document.createElement('li')
                itemList.textContent = element.email
                listElement.appendChild(itemList)
            });
        }else{
            listElement.innerHTML = ''
            comentElement.forEach(element => {
                const itemList = document.createElement('li')
                itemList.textContent = element.body
                listElement.appendChild(itemList)
            });
        }
    
}

})
.catch(error => {
    console.error('Erro ao chamar a API:', error);
});
        