const main = document.getElementById('main')
a = 1;
    for (let i=0;i<8;i++){
        const row = document.createElement("tr")
        main.appendChild(row)
        a++
        for(let j=0;j<8;j++){
            if (a%2==0){
            const rowTd = document.createElement("td")
            rowTd.style.backgroundColor = 'black'
            row.appendChild(rowTd)
            }
            else{
            const rowTd = document.createElement("td")
            rowTd.style.backgroundColor = 'white'
            row.appendChild(rowTd)
            }
            a++
        }
    }