let bott = document.getElementById('bottom')
let fAdd = document.getElementById('f-add')
let form1 = document.getElementById('form1')
let addBtn = document.getElementById('addBtn')

function add() {
    let alrtP1 = document.getElementById('alrt-p1')
    // console.log(fAdd.value)


    if (fAdd.value == '') {
        alrtP1.innerHTML = 'Plese select value'
    }

    else {
        if (fAdd.value == 'text' || fAdd.value == 'number' || fAdd.value == 'email' || fAdd.value == 'radio' || fAdd.value == 'checkbox' || fAdd.value == 'select') {
            if (fAdd.value == 'text' || fAdd.value == 'number' || fAdd.value == 'email') {
                alrtP1.innerHTML = ''
                let row = document.createElement('div')
                row.className = 'row g-0 mb-2 mt-2'
                bott.appendChild(row)

                let col1 = document.createElement('div')
                col1.className = 'col-5 for-input'
                row.appendChild(col1)

                let col2 = document.createElement('div')
                col2.className = 'col-5 for-input for-input1'
                row.appendChild(col2)
                let col3 = document.createElement('div')
                col3.className = 'col-2 for-input'
                row.appendChild(col3)

                let remove1 = document.createElement('a')
                remove1.href = "#"
                remove1.className = 'remove'
                remove1.setAttribute('onclick', 'remove(this)')
                remove1.innerHTML = 'X'
                col3.appendChild(remove1)

                let inpBox = document.createElement('div')
                inpBox.className = 'inp-box'
                col1.appendChild(inpBox)


                let input1 = document.createElement('input')
                let inpButton = document.createElement('button')
                input1.type = 'text'
                inpBox.appendChild(input1)
                inpBox.appendChild(inpButton)

                let input2 = document.createElement('input')
                input2.type = 'text'


                // -------------to add input lable button
                inpButton.setAttribute('onclick', 'inpAdd(this)')
                inpButton.innerHTML = 'ADD'

                let inpLable = document.createElement('lable')
                inpLable.className = 'inp-label'
                col1.appendChild(inpLable)

                col2.appendChild(input2)
                input2.placeholder = fAdd.value
                bott.setAttribute('disabled', 'true')
                bott.removeAttribute('onclick', 'add()')
                addBtn.setAttribute('disabled', 'true')
            }
            else if (fAdd.value == 'radio' || fAdd.value == 'checkbox' || fAdd.value == 'select') {
                alrtP1.innerHTML = ''

                let row = document.createElement('div')
                row.className = 'row g-0 mb-2 mt-2'
                bott.appendChild(row)

                let col1 = document.createElement('div')
                col1.className = 'col-5 for-input'
                row.appendChild(col1)

                let col2 = document.createElement('div')
                col2.className = 'col-5 for-input for-input1'
                row.appendChild(col2)
                let col3 = document.createElement('div')
                col3.className = 'col-2 for-input'
                row.appendChild(col3)

                let remove1 = document.createElement('a')
                remove1.href = "#"
                remove1.className = 'remove'
                remove1.setAttribute('onclick', 'remove(this)')
                remove1.innerHTML = 'X'
                col3.appendChild(remove1)

                let inpBox = document.createElement('div')
                inpBox.className = 'inp-box'
                col1.appendChild(inpBox)


                let input1 = document.createElement('input')
                let inpButton = document.createElement('button')

                input1.type = 'text'
                inpBox.appendChild(input1)
                inpBox.appendChild(inpButton)

                let input2 = document.createElement('input')
                input2.type = 'text'


                // -------------to add input lable button
                inpButton.setAttribute('onclick', 'inpAdd(this)')
                inpButton.innerHTML = 'ADD'

                let inpLable = document.createElement('lable')
                inpLable.className = 'inp-label'
                col1.appendChild(inpLable)

                let inpdiv = document.createElement('div')
                inpdiv.className = 'inp-box'
                col2.appendChild(inpdiv)

                let inpButton1 = document.createElement('button')
                let inpdone = document.createElement('button')
                inpdiv.appendChild(input2)
                inpdiv.appendChild(inpButton1)
                inpdiv.appendChild(inpdone)
                inpButton1.innerHTML = 'ADD'
                inpdone.innerHTML = 'DONE'
                inpButton1.setAttribute('onclick', `inpAdd1(this)`)
                inpdone.setAttribute('onclick', `inpDone(this)`)

                let radioDiv = document.createElement('div')
                col2.appendChild(radioDiv)

                if (fAdd.value == 'select') {
                    let inpSelect = document.createElement('select')
                    col2.appendChild(inpSelect)
                    inpSelect.className = 'inpSelect'
                }
                addBtn.setAttribute('disabled', 'true')
            }
        }

        else {
            document.getElementById('form_c').style.display="flex"
            addBtn.setAttribute('disabled', 'true')
        }
    }
}



function inpAdd(a) {
    let z = a.parentNode
    let y = z.parentNode
    if (z.childNodes[0].value.trim() != "") {
        y.childNodes[1].innerHTML = z.childNodes[0].value.trim() + ' :-'
        z.remove()
        addBtn.removeAttribute('disabled', 'true')
    }
}

function inpAdd1(a) {
    let z = a.parentNode
    let y = z.parentNode


    if (z.childNodes[0].value.trim() != '') {

        if (fAdd.value == 'radio' || fAdd.value == 'checkbox') {

            let radio1 = document.createElement('input')
            if (fAdd.value == 'radio') {
                radio1.type = 'radio'
                radio1.setAttribute('name','radio')
            }
            else if (fAdd.value == 'checkbox') {
                radio1.type = 'checkbox'
            }
            let inplab1 = document.createElement('lable')
            let breck1 = document.createElement('br')
            y.childNodes[1].appendChild(radio1)
            y.childNodes[1].appendChild(inplab1)
            y.childNodes[1].appendChild(breck1)
            inplab1.innerHTML = z.childNodes[0].value.trim()
            z.childNodes[0].value = ''
        }

        else if (fAdd.value == 'select') {
            let inpOptiont = document.createElement('option')
            inpOptiont.innerHTML = z.childNodes[0].value.trim()
            y.childNodes[2].className += ' S_block'
            y.childNodes[2].appendChild(inpOptiont)
            z.childNodes[0].value = ''
        }
        console.log(y.childNodes[2])
    }

}

function remove(a) {
    let z = a.parentNode
    let y = z.parentNode
    y.remove()
    addBtn.removeAttribute('disabled', 'true')
}


function inpDone(a) {
    let z = a.parentNode
    let y = z.parentNode
    y.childNodes[0].remove()
    console.log(y.childNodes)

}

function removeCol() {
    let z = form1.childNodes

    for (var i = 0; i < z.length; i++) {
        for (var j = 0; j < z[i].childNodes.length; j++) {
            if (j == 2) {
                z[i].childNodes[j].remove()
            }
            console.log(j)
        }
    }
    addBtn.removeAttribute('disabled', 'true')

}


function for_submit_btn(){
    let row = document.createElement('div')
    row.className = 'row g-0 mb-2 mt-2 d-flex justify-content-center'
    bott.appendChild(row)

    let subBtn1 = document.createElement('button')
    row.appendChild(subBtn1)
    subBtn1.innerHTML = 'Submit'
     subBtn1.className = 'subBtn'
    subBtn1.setAttribute('onclick', 'subBtn()')
    document.getElementById('form_c').style.display="none"
    addBtn.removeAttribute('disabled', 'true')
}

function for_submit_btn1(){
    document.getElementById('form_c').style.display="none"
    addBtn.removeAttribute('disabled', 'true')
}

function subBtn(){
    document.getElementById('mForm').style = 'transform: scale(1); opacity: 1; z-index: 1;'
    form1.innerHTML = bott.innerHTML
    removeCol()
    let z=document.getElementById('form1')
    z.childNodes[z.childNodes.length - 1].childNodes[0].removeAttribute('onclick', 'subBtn()')
    z.childNodes[z.childNodes.length - 1].childNodes[0].setAttribute('onclick', 'subBtn1()')
    console.log(z.childNodes[z.childNodes.length - 1])
}

function subBtn1() {
    let z = document.getElementById('outForm')
    z.innerHTML = form1.innerHTML
    z.childNodes[z.childNodes.length - 1].remove()

    for (var i = 0; i < z.childNodes.length; i++) {
        for (var j = 0; j < z.childNodes[i].childNodes.length; j++) {
            if (j == 1) {
                console.log(z.childNodes[i].childNodes[j].childNodes[0].childNodes.length)
                let for_value=''
                if(z.childNodes[i].childNodes[j].childNodes[0].type=="text"){
                    for_value=form1.childNodes[i].childNodes[j].childNodes[0].value.trim()
                    z.childNodes[i].childNodes[j].childNodes[0].remove()
                    z.childNodes[i].childNodes[j].appendChild(document.createElement('p'))
                    z.childNodes[i].childNodes[j].childNodes[0].innerHTML = for_value
                    console.log(for_value)

                }
                // else if(z.childNodes[i].childNodes[j].childNodes[0].==){
                //     console.log('ram ram')
                // }

                
                console.log(z.childNodes[i].childNodes[j].childNodes)
                
            }
        }


    }
    z.style.transform = 'scale(1.1)'
}