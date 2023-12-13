const node_for_click = document.getElementById("for_click")

function find_edit(){
    const Name  = document.getElementsByTagName('span')[6]
    console.log(Name.innerHTML)
    Name.innerHTML = 'Semmyon'

    const surName  = document.getElementsByTagName('span')[5]
    console.log(surName.innerHTML)
    surName.innerHTML = 'Cherepanov'

    const date  = document.getElementsByTagName('span')[8]
    console.log(date.innerHTML)
    date.innerHTML = '2004-03-21'


}
node_for_click.addEventListener("click",find_edit)