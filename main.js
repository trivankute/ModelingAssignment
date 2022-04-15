var container = document.querySelector('.container')

// event setBtn
function setBtnChangeData(options) {
    var inputElement = document.querySelector(`.${options.part} .getTheNumber`);
    var setBtn = inputElement.parentElement.querySelector('.btnSet')
    var resetBtn = inputElement.parentElement.querySelector('.btnReset')

    var numberDefaultsArray = []
    for (let i = 0; i < options.states.length; i++) {
        numberDefaultsArray.push(parseInt(document.querySelector(`.${options.states[i]} span`).innerHTML))
    }

    if (options.states.length === 1) // part 1 part 2
    {

        setBtn.onclick = function (e) {
            if (!isNaN(inputElement.value)) {
                if (parseInt(inputElement.value) >= 999) {
                    alert('The number is too large')
                }
                else if (parseInt(inputElement.value) <= 0) {
                    alert('The number must be larger than 0')
                }
                else if (!parseInt(inputElement.value)) {
                    alert('Please types number to the setting box')
                }
                else {
                    for (let i = 0; i < options.states.length; i++) {
                        if (!isNaN(inputElement.value)) {
                            if (parseInt(inputElement.value))
                                document.querySelector(`.${options.states[i]} span`).innerHTML = inputElement.value
                        }
                    }
                }
            }
            else {
                alert('Please types number to the setting box')
            }
        }
    }
    if (options.states.length === 2) //part3
    {
        setBtn.onclick = function () {
            if (inputElement.value.search(',') !== -1) {
                var dataState1 = (inputElement.value.slice(0, inputElement.value.search(',')))
                var dataState2 = (inputElement.value.slice(inputElement.value.search(',') + 1))
                if (!isNaN(dataState1) && !isNaN(dataState2)) {
                    if (parseInt(dataState1) > 999 && parseInt(dataState2) > 999) {
                        alert('Both numbers are too large')
                    }
                    else if (parseInt(dataState1) <= 0 && parseInt(dataState2) <= 0) {
                        alert('Both numbers must be larger than 0')
                    }
                    else if (parseInt(dataState1) > 999 && parseInt(dataState2) <= 0) {
                        alert('First number is too large & Second number must be larger than 0')
                    }
                    else if (parseInt(dataState1) <= 0 && parseInt(dataState2) > 999) {
                        alert('First number must be larger than 0 & Second number is too large')
                    }
                    else if (parseInt(dataState1) > 999) {
                        alert('First number is too large')
                    }
                    else if (parseInt(dataState1) <= 0) {
                        alert('First number must be larger than 0')
                    }
                    else if (parseInt(dataState2) > 999) {
                        alert('Second number is too large')
                    }
                    else if (parseInt(dataState2) <= 0) {
                        alert('Second number must be larger than 0')
                    }
                    else if (parseInt(dataState1) && parseInt(dataState2)) {

                        document.querySelector(`.${options.states[0]} span`).innerHTML = parseInt(dataState1)
                        document.querySelector(`.${options.states[1]} span`).innerHTML = parseInt(dataState2)

                    }
                    else {
                        alert('Please types first number + "," + second number to the setting box')
                    }
                }
                else {
                    alert('Please types first number + "," + second number to the setting box')
                }
            }
            else {
                alert('Please types first number + "," + second number to the setting box')
            }
        }
    }
    resetBtn.onclick = function (e) {
        for (let i = 0; i < options.states.length; i++) {
            document.querySelector(`.${options.states[i]} span`).innerHTML = numberDefaultsArray[i]
        }
        for (let i = 2; i < Object.keys(options).length; i++) {
            (document.querySelector(`.${options[i]} span`)).innerHTML = null
        }
    }
}


// event Movement left to right
function token_Movement(options) {
    var state1 = document.querySelector(`.${options.state1}`)
    var state1_num = state1.querySelector('span')
    var transition = document.querySelector(`.${options.transition}`)
    var state2 = document.querySelector(`.${options.state2}`)
    var state2_num = state2.querySelector('span')
    transition.onclick = function (e) {
        if (state1_num.innerHTML > 0) {
            var temp1 = document.createElement('div')
            var temp2 = document.createElement('div')

            temp1.classList.add(`${options.token_Movement1}`)
            temp2.classList.add(`${options.token_Movement2}`)

            transition.appendChild(temp1);
            state1_num.innerHTML = parseInt(state1_num.innerHTML) - 1

            setTimeout(function () {
                transition.removeChild(temp1)
                setTimeout(function () {
                    transition.appendChild(temp2)
                }, 1)
                setTimeout(function () {
                    transition.removeChild(temp2)
                    if (state2_num.innerHTML) {
                        state2_num.innerHTML = parseInt(state2_num.innerHTML) + 1;
                    }
                    else {
                        state2_num.innerHTML = 1
                    }
                }, 800)
            }, 800)
        }
    }
}

function token_Movement2(options) {
    var state1 = document.querySelector(`.${options.state1}`)
    var state1_num = state1.querySelector('span')
    var state3 = document.querySelector(`.${options.state3}`)
    var state3_num = state3.querySelector('span')
    var transition = document.querySelector(`.${options.transition}`)
    var state2 = document.querySelector(`.${options.state2}`)
    var state2_num = state2.querySelector('span')
    var state4 = document.querySelector(`.${options.state4}`)
    var state4_num = state4.querySelector('span')
    transition.onclick = function (e) {
        if (state1_num.innerHTML > 0 && state3_num.innerHTML > 0) {
            var temp1 = document.createElement('div')
            var temp2 = document.createElement('div')
            var temp3 = document.createElement('div')
            var temp4 = document.createElement('div')
            temp1.classList.add(`${options.token_Movement1}`)
            temp2.classList.add(`${options.token_Movement2}`)
            temp3.classList.add(`${options.token_Movement3}`)
            temp4.classList.add(`${options.token_Movement4}`)

            transition.appendChild(temp1);
            transition.appendChild(temp3);
            state1_num.innerHTML = parseInt(state1_num.innerHTML) - 1
            state3_num.innerHTML = parseInt(state3_num.innerHTML) - 1

            setTimeout(function () {
                transition.removeChild(temp1)
                transition.removeChild(temp3)
                setTimeout(function () {
                    transition.appendChild(temp2)
                    transition.appendChild(temp4)
                }, 1)
                setTimeout(function () {
                    transition.removeChild(temp2)
                    transition.removeChild(temp4)
                    if (state2_num.innerHTML && state4_num.innerHTML) {
                        state2_num.innerHTML = parseInt(state2_num.innerHTML) + 1;
                        state4_num.innerHTML = parseInt(state4_num.innerHTML) + 1;
                    }
                    else {
                        state2_num.innerHTML = 1
                        state4_num.innerHTML = 1
                    }
                }, 800)
            }, 800)
        }
    }
}


// item4 show answering
function printString(s) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (i == s.length - 1) {
            str += s[i];
        }
        else
            str = str + s[i] + " -> ";
    }
    return str;
}

var s = [];
var count = -1;
function backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, hint = 1, textArea, type) {
    if (count !== -1) {
        if (hint === 1) {
            for (let i = 0; i < 3; i++) {
                if (i == 0 && wait > 0 && free > 0) {
                    count++;
                    s.push("start");
                    backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, 4, textArea, type);
                    backTracking_And_ShowAnswer(wait - 1, free - 1, busy + 1, inside + 1, docu, done, 1, textArea, type);
                    s.pop();
                }
                if (i == 1 && busy > 0 && inside > 0) {
                    count++;
                    s.push("change");
                    backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, 4, textArea, type);
                    backTracking_And_ShowAnswer(wait, free, busy - 1, inside - 1, docu + 1, done + 1, 2, textArea, type);
                    s.pop();
                }
                if (i == 2 && docu > 0) {
                    count++;
                    s.push("end");
                    backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, 4, textArea, type);
                    backTracking_And_ShowAnswer(wait, free + 1, busy, inside, docu - 1, done, 3, textArea, type);
                    s.pop();
                }
            }
        }
        else if (hint === 2) {
            for (let i = 0; i < 3; i++) {
                if (i == 0 && busy > 0 && inside > 0) {
                    count++;
                    s.push("change");
                    backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, 4, textArea, type);
                    backTracking_And_ShowAnswer(wait, free, busy - 1, inside - 1, docu + 1, done + 1, 2, textArea, type);
                    s.pop();
                }
                if (i == 1 && docu > 0) {
                    count++;
                    s.push("end");
                    backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, 4, textArea, type);
                    backTracking_And_ShowAnswer(wait, free + 1, busy, inside, docu - 1, done, 3, textArea, type);
                    s.pop();
                }
                if (i == 2 && wait > 0 && free > 0) {
                    count++;
                    s.push("end");
                    backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, 4, textArea, type);
                    backTracking_And_ShowAnswer(wait - 1, free - 1, busy + 1, inside + 1, docu, done, 1, textArea, type);
                    s.pop();
                }
            }
        }
        else if (hint === 3) {
            for (let i = 0; i < 3; i++) {
                if (i == 0 && docu > 0) {
                    count++;
                    s.push("end");
                    backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, 4, textArea, type);
                    backTracking_And_ShowAnswer(wait, free + 1, busy, inside, docu - 1, done, 3, textArea, type);
                    s.pop();
                }
                if (i == 1 && wait > 0 && free > 0) {
                    count++;
                    s.push("start");
                    backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, 4, textArea, type);
                    backTracking_And_ShowAnswer(wait - 1, free - 1, busy + 1, inside + 1, docu, done, 1, textArea, type);
                    s.pop();
                }
                if (i == 2 && busy > 0 && inside > 0) {
                    count++;
                    s.push("change");
                    backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, 4, textArea, type);
                    backTracking_And_ShowAnswer(wait, free, busy - 1, inside - 1, docu + 1, done + 1, 2, textArea, type);
                    s.pop();
                }
            }
        }
        else {
            if (type === "find") {
                document.querySelector(`.${textArea}`).innerHTML += `Fire sequence: [${printString(s)} ].\n`
                document.querySelector(`.${textArea}`).innerHTML
                    += `Marking: [${wait}.wait ${free}.free ${busy}.busy ${inside}.inside ${docu}.docu ${done}.done ].\n\n`;
            }
            if (type === "count") {
                document.querySelector(`.${textArea}`).innerHTML
                    = `Numbers of sequences or reachable markings was counted: ${count}.`;
            }
        }
    }
    else {
        if (type === "find") {
            document.querySelector(`.${textArea}`).innerHTML += `Fire sequence: [${printString(s)} ].\n`
            document.querySelector(`.${textArea}`).innerHTML
                += `Marking: [${wait}.wait ${free}.free ${busy}.busy ${inside}.inside ${docu}.docu ${done}.done ].\n\n`;
        }
        if (type === "count" && ((wait <= 0 || free <= 0) && (busy <= 0 || inside <= 0) && docu <= 0)) {
            document.querySelector(`.${textArea}`).innerHTML
                = `Numbers of sequences or reachable markings was counted: 1.`;
        }
        count = 1
        backTracking_And_ShowAnswer(wait, free, busy, inside, docu, done, hint = 1, textArea, type)
    }
}
function reset_The_View(view) {
    document.querySelector(`.${view}`).innerHTML = ""
}
function item4_Running(options) {
    var findBtn = document.querySelector(`.${options.find}`)
    var countBtn = document.querySelector(`.${options.count}`)
    const msg = ['Wait','Free','Inside','Busy','Docu','Done']
    var errorAlert1 = "Please types number to the setting box"
    var errorAlert2 = "The number is too large"
    var errorAlert3 = "The number must be larger than -1"
    findBtn.onclick = function () {
        var main_Numbers_Array = []
        let checking1 = 0
        let checking2 = 0
        let checking3 = 0
        var msgForAlert1 = [0,0,0,0,0,0]
        var msgForAlert2 = [0,0,0,0,0,0]
        var msgForAlert3 = [0,0,0,0,0,0]
        var stringAlert1 = ""
        var stringAlert2 = ""
        var stringAlert3 = ""
        for (let i = 2; i < options.data_Number_Childs + 2; i++) {
            let temp = document.querySelector(`.${options.taking_Data_Places}:nth-child(${i})`)
            if (isNaN(temp.querySelector('.getTheNumber').value || parseInt(temp.querySelector('.getTheNumber').value))) {
                if(isNaN(temp.querySelector('.getTheNumber').value))msgForAlert1[i-2]=1
                main_Numbers_Array.push(0)
            }
            else {
                if(parseInt(temp.querySelector('.getTheNumber').value)>10)
                msgForAlert2[i-2]=1
                if(parseInt(temp.querySelector('.getTheNumber').value)<0)
                msgForAlert3[i-2]=1
                main_Numbers_Array.push(parseInt(temp.querySelector('.getTheNumber').value))
            }
        }

        for(let i=0;i<6;i++)
        {
            if(msgForAlert1[i]!==0)
            {
                if(checking1 === 0)
                {
                    stringAlert1= errorAlert1 + ` at ${msg[i]} box`
                    checking1++
                }
                else
                {
                    stringAlert1+=`, ${msg[i]} box`
                }
            }
            if(msgForAlert2[i]!==0)
            {
                if(checking2 === 0)
                {
                    stringAlert2= errorAlert2 + ` at ${msg[i]} box`
                    checking2++
                }
                else
                {
                    stringAlert2+=`, ${msg[i]} box`
                }
            }
            if(msgForAlert3[i]!==0)
            {
                if(checking3 === 0)
                {
                    stringAlert3= errorAlert3 + ` at ${msg[i]} box`
                    checking3++
                }
                else
                {
                    stringAlert3+=`, ${msg[i]} box`
                }
            }
        }
        if(stringAlert1!=="" || stringAlert2!=="" || stringAlert3!=="")
        {
            if(stringAlert1!=="" && stringAlert2!=="" && stringAlert3!=="")
            {
                alert(stringAlert1 + '\n' + stringAlert2 + '\n' + stringAlert3)
            }
            else if(stringAlert1!=="" && stringAlert2!=="")
            {
                alert(stringAlert1 + '\n' + stringAlert2)
            }
            else if(stringAlert1!==""&& stringAlert3!=="")
            {
                alert(stringAlert1 +'\n' + stringAlert3)
            }
            else if(stringAlert2!=="" && stringAlert3!=="")
            {
                alert(stringAlert2 + '\n' + stringAlert3)
            }
            else if(stringAlert1!=="")
            {
                alert(stringAlert1)
            }
            else if(stringAlert2!=="")
            {
                alert(stringAlert2)
            }
            else if(stringAlert3!=="")
            {
                alert(stringAlert3)
            }
        }
        else
        {
            reset_The_View(options.text_Area)
            backTracking_And_ShowAnswer(main_Numbers_Array[0],
                main_Numbers_Array[1],
                main_Numbers_Array[2],
                main_Numbers_Array[3],
                main_Numbers_Array[4],
                main_Numbers_Array[5], 1, options.text_Area, "find")
            count = -1
        }
    }
    countBtn.onclick = function () {
        var main_Numbers_Array = []
        let checking1 = 0
        let checking2 = 0
        let checking3 = 0
        var msgForAlert1 = [0,0,0,0,0,0]
        var msgForAlert2 = [0,0,0,0,0,0]
        var msgForAlert3 = [0,0,0,0,0,0]
        var stringAlert1 = ""
        var stringAlert2 = ""
        var stringAlert3 = ""
        for (let i = 2; i < options.data_Number_Childs + 2; i++) {
            let temp = document.querySelector(`.${options.taking_Data_Places}:nth-child(${i})`)
            if (isNaN(temp.querySelector('.getTheNumber').value || parseInt(temp.querySelector('.getTheNumber').value))) {
                if(isNaN(temp.querySelector('.getTheNumber').value))msgForAlert1[i-2]=1
                main_Numbers_Array.push(0)
            }
            else 
            {
                if(parseInt(temp.querySelector('.getTheNumber').value)>10)
                msgForAlert2[i-2]=1
                if(parseInt(temp.querySelector('.getTheNumber').value)<0)
                msgForAlert3[i-2]=1
                main_Numbers_Array.push(parseInt(temp.querySelector('.getTheNumber').value))
            }
        }
        
        for(let i=0;i<6;i++)
        {
            if(msgForAlert1[i]!==0)
            {
                if(checking1 === 0)
                {
                    stringAlert1= errorAlert1 + ` at ${msg[i]} box`
                    checking1++
                }
                else
                {
                    stringAlert1+=`, ${msg[i]} box`
                }
            }
            if(msgForAlert2[i]!==0)
            {
                if(checking2 === 0)
                {
                    stringAlert2= errorAlert2 + ` at ${msg[i]} box`
                    checking2++
                }
                else
                {
                    stringAlert2+=`, ${msg[i]} box`
                }
            }
            if(msgForAlert3[i]!==0)
            {
                if(checking3 === 0)
                {
                    stringAlert3= errorAlert3 + ` at ${msg[i]} box`
                    checking3++
                }
                else
                {
                    stringAlert3+=`, ${msg[i]} box`
                }
            }
        }
        if(stringAlert1!=="" || stringAlert2!=="" || stringAlert3!=="")
        {
            if(stringAlert1!=="" && stringAlert2!=="" && stringAlert3!=="")
            {
                alert(stringAlert1 + '\n' + stringAlert2 + '\n' + stringAlert3)
            }
            else if(stringAlert1!=="" && stringAlert2!=="")
            {
                alert(stringAlert1 + '\n' + stringAlert2)
            }
            else if(stringAlert1!==""&& stringAlert3!=="")
            {
                alert(stringAlert1 +'\n' + stringAlert3)
            }
            else if(stringAlert2!=="" && stringAlert3!=="")
            {
                alert(stringAlert2 + '\n' + stringAlert3)
            }
            else if(stringAlert1!=="")
            {
                alert(stringAlert1)
            }
            else if(stringAlert2!=="")
            {
                alert(stringAlert2)
            }
            else if(stringAlert3!=="")
            {
                alert(stringAlert3)
            }
        }
        else
        {
        reset_The_View(options.text_Area)
        backTracking_And_ShowAnswer(main_Numbers_Array[0],
            main_Numbers_Array[1],
            main_Numbers_Array[2],
            main_Numbers_Array[3],
            main_Numbers_Array[4],
            main_Numbers_Array[5], 1, options.text_Area, "count")
        count = -1;
        }
    }
}



// checking form of the input element
function Validation(options) {
    // loading the rules to check
    const rulesArray = []
    for (let i = 0; i < options.rules.length; i++) {
        rulesArray.push(options.rules[i])
    }
    if (options.parts === 'partOne' || options.parts === 'partTwo') {
        const input = document.querySelector(`.${options.parts}__inputElements input`)
        const span = document.querySelector(`.${options.parts} .problem_showing`)
        input.oninput = function (e) {
            // focus
            if (!input.classList.contains('successBorder')) {
                input.classList.add('successBorder')
            }
            // check dau vao co chua' string ko
            if (!isNaN(input.value)) {
                const main = parseInt(input.value)
                if (span.classList.contains('warningColor')) {
                    span.classList.remove('warningColor')
                }
                if (input.classList.contains('warningBorder')) {
                    input.classList.remove('warningBorder')
                    input.classList.add('successBorder')
                }
                // check them lan nua khi enter value ve` rong~ thi cx se tra ve` NaN nhma lai qua dc lan check dau tien
                if (!isNaN(main)) {
                    var errorMsg = null;
                    for (let i = 0; i < rulesArray.length; i++) {
                        errorMsg = rulesArray[i](main)
                        if (errorMsg) { break }
                    }
                    if (errorMsg) {
                        span.classList.add('warningColor')
                        input.classList.remove('successBorder')
                        input.classList.add('warningBorder')
                        span.innerHTML = errorMsg
                    }
                }
            }
            else {
                span.classList.add('warningColor')
                if (input.classList.contains('successBorder'))
                    input.classList.remove('successBorder')
                input.classList.add('warningBorder')
                span.innerHTML = (options.mainError)
            }
        }
        input.onblur = function () {
            if (input.classList.contains('successBorder') && isNaN(parseInt(input.value))) {
                input.classList.remove('successBorder')
            }
        }
////////////////////////////////////////////////////////////////
        // input.onclick = function () {
        //     if (!input.classList.contains('successBorder')) {
        //         input.classList.add('successBorder')
        //     }
        //     // kiem tra trang thai cua no co dang red hay ko
        //     if (!isNaN(input.value)) {
        //         const main = parseInt(input.value)
        //         if (!isNaN(main)) {
        //             var errorMsg = null;
        //             for (let i = 0; i < rulesArray.length; i++) {
        //                 errorMsg = rulesArray[i](main)
        //                 if (errorMsg) { break }
        //             }
        //             if (errorMsg) {
        //                 input.classList.remove('successBorder')
        //                 input.classList.add('warningBorder')
        //             }
        //         }
        //     }
        //     else {
        //         input.classList.remove('successBorder')
        //         input.classList.add('warningBorder')
        //     }
        // }
    }
    ////////////////////////////////
    else if (options.parts === 'partThree') {
        const input = document.querySelector(`.${options.parts}__inputElements input`)
        const span = document.querySelector(`.${options.parts} .problem_showing`)
        input.oninput = function () {
            if (!input.classList.contains('successBorder')) {
                input.classList.add('successBorder')
            }
            var dataState1 = input.value.slice(0,input.value.search(','))
            var dataState2 = input.value.slice(input.value.search(',')+1)
            // check xem co string trong do ko
            if(!isNaN(dataState1) && !isNaN(dataState2))
            {
                if (span.classList.contains('warningColor')) {
                    span.classList.remove('warningColor')
                }
                if (input.classList.contains('warningBorder')) {
                    input.classList.remove('warningBorder')
                    input.classList.add('successBorder')
                }
               
                // check xem day` du? 2 so chua
                if(!isNaN(parseInt(dataState1)) && !isNaN(parseInt(dataState2)))
                {
                    var errorMsg1 = null;
                    for (let i = 0; i < rulesArray.length; i++) {
                        errorMsg1 = rulesArray[i](parseInt(dataState1))
                        if (errorMsg1) { break }
                    }
                    var errorMsg2 = null;
                    for (let i = 0; i < rulesArray.length; i++) {
                        errorMsg2 = rulesArray[i](parseInt(dataState2))
                        if (errorMsg2) { break }
                    }
                    if(errorMsg1 && errorMsg2)
                    {
                        span.classList.add('warningColor')
                        if (input.classList.contains('successBorder'))
                        input.classList.remove('successBorder')
                        input.classList.add('warningBorder')
                        span.innerHTML = 'First number: ' + errorMsg1 + '; Second number: ' + errorMsg2
                    }
                    else if(errorMsg1)
                    {
                        span.classList.add('warningColor')
                        if (input.classList.contains('successBorder'))
                        input.classList.remove('successBorder')
                        input.classList.add('warningBorder')
                        span.innerHTML = 'First number: ' + errorMsg1
                    }
                    else if(errorMsg2)
                    {
                        span.classList.add('warningColor')
                        if (input.classList.contains('successBorder'))
                        input.classList.remove('successBorder')
                        input.classList.add('warningBorder')
                        span.innerHTML = 'Second number: ' + errorMsg2
                    }
                }
            }
            else{
                span.classList.add('warningColor')
                if (input.classList.contains('successBorder'))
                    input.classList.remove('successBorder')
                input.classList.add('warningBorder')
                span.innerHTML = (options.mainError)
            }
        }
        input.onblur = function () {
            if (input.classList.contains('successBorder') && isNaN(parseInt(input.value))) {
                input.classList.remove('successBorder')
            }
        }
        // input.onclick = function () {
        //     if (!input.classList.contains('successBorder')) {
        //         input.classList.add('successBorder')
        //     }
        //     var dataState1 = input.value.slice(0,input.value.search(','))
        //     var dataState2 = input.value.slice(input.value.search(',')+1)
        //     if(!isNaN(dataState1) && !isNaN(dataState2))
        //     {
        //         if(!isNaN(parseInt(dataState1)) && !isNaN(parseInt(dataState2)))
        //         {
        //             var errorMsg1 = null;
        //                 for (let i = 0; i < rulesArray.length; i++) {
        //                     errorMsg1 = rulesArray[i](parseInt(dataState1))
        //                     if (errorMsg1) { break }
        //                 }
        //                 var errorMsg2 = null;
        //                 for (let i = 0; i < rulesArray.length; i++) {
        //                     errorMsg2 = rulesArray[i](parseInt(dataState2))
        //                     if (errorMsg2) { break }
        //                 }
        //                 if(errorMsg1 && errorMsg2)
        //                 {
        //                     input.classList.remove('successBorder')
        //                     input.classList.add('warningBorder')
        //                 }
        //                 else if(errorMsg1)
        //                 {
        //                     input.classList.remove('successBorder')
        //                     input.classList.add('warningBorder')
        //                 }
        //                 else if(errorMsg2)
        //                 {
        //                     input.classList.remove('successBorder')
        //                     input.classList.add('warningBorder')
        //                 }
        //                 else
        //                 {
        //                     return
        //                 }
        //         }
        //     }
        //     else
        //     {
        //         input.classList.remove('successBorder')
        //         input.classList.add('warningBorder')
        //     }
        // }
    }
    else {
        const input = document.querySelectorAll(`.${options.parts}__inputElements input`)
        const msg = ['Wait','Free','Inside','Busy','Docu','Done']
        const msgForSpan = [0,0,0,0,0,0]
        const msgForSpan1 = [0,0,0,0,0,0]
        const msgForSpan2 = [0,0,0,0,0,0]
        var errorChecking = 0
        var errorMsg1 = options.rules[0](1000)
        var errorMsg2 = options.rules[1](-1)
        const span = document.querySelectorAll(`.${options.parts} .problem_showing`)[0]
        const span1 = document.querySelectorAll(`.${options.parts} .problem_showing`)[1]
        const span2 = document.querySelectorAll(`.${options.parts} .problem_showing`)[2]
        for(let i =0;i<input.length;i++)
        {
            
            var errorMsg = null;
            var errorMsgFromBack = null;
            input[i].oninput = function (e) {
                // focus
                if (!input[i].classList.contains('successBorder')) {
                    input[i].classList.add('successBorder')
                }
                if(msgForSpan[i]===1)
                {
                    msgForSpan[i]=0
                }
                if(msgForSpan1[i]===1)
                {
                    msgForSpan1[i]=0
                }
                if(msgForSpan2[i]===1)
                {
                    msgForSpan2[i]=0
                }
                // check dau vao co chua' string ko
                if (!isNaN(input[i].value)) {
                    const main = parseInt(input[i].value)
                    let checking = 0
                    for(let i=0;i<input.length;i++)
                    {
                        if(input[i].classList.contains('warningBorder'))
                        {
                            checking ++
                        }
                        if (span.classList.contains('warningColor') && checking===0 && i===input.length-1) {
                            span.classList.remove('warningColor')
                        }
                    }
                    if (input[i].classList.contains('warningBorder')) {
                        input[i].classList.remove('warningBorder')
                        input[i].classList.add('successBorder')
                    }
                    // check them lan nua khi enter value ve` rong~ thi cx se tra ve` NaN nhma lai qua dc lan check dau tien
                    if (!isNaN(main)) {
                        for (let i = 0; i < rulesArray.length; i++) {
                            errorMsg = rulesArray[i](main)
                            if (errorMsg) {errorChecking=i; break }
                        }
                        if (errorMsg) {
                            span1.classList.add('warningColor')
                            span2.classList.add('warningColor')
                            input[i].classList.remove('successBorder')
                            input[i].classList.add('warningBorder')
                            if(errorChecking === 0)
                            msgForSpan1[i]=1
                            if(errorChecking === 1)
                            msgForSpan2[i]=1
                        //     let checking = 0
                        //     span1.innerHTML = ""
                        //     for(let i=0;i<input.length;i++)
                        //     {
                        //     if(input[i].classList.contains('warningBorder'))
                        //     {
                        //     if(checking === 0)
                        //     {
                        //         span1.innerHTML =errorMsg +  ` at ${msg[i]} box`
                        //         if(checking === 0)checking ++
                        //     }
                        //     else
                        //     {
                        //         span1.innerHTML += `, ${msg[i]} box`
                        //         if(checking === 0)checking ++
                        //     }
                        // }
                        //     }
                        //     span1.innerHTML += '.'
                        }
                    }
                }
                else {
                    span.classList.add('warningColor')
                    if (input[i].classList.contains('successBorder'))
                        input[i].classList.remove('successBorder')
                        input[i].classList.add('warningBorder')
                        msgForSpan[i]=1
                    //     let checking = 0
                    //     span.innerHTML = ""
                    // for(let i=0;i<input.length;i++)
                    // {
                    //     if(input[i].classList.contains('warningBorder'))
                    //     {
                    //         if(checking === 0)
                    //         {
                    //             span.innerHTML = options.mainError +  ` at ${msg[i]} box`
                    //             if(checking === 0)checking ++
                    //         }
                    //         else
                    //         {
                    //             span.innerHTML += `, ${msg[i]} box`
                    //             if(checking === 0)checking ++
                    //         }
                    //     }
                    // }
                    // span.innerHTML += '.'
                }
                let checking =0
                span.innerHTML = ""
                let checking1 =0
                span1.innerHTML = ""
                let checking2 =0
                span2.innerHTML = ""
                for(let i=0;i<6;i++)
                {
                    if(msgForSpan[i]!==0)
                    {
                        if(checking===0)
                        {
                            span.innerHTML = options.mainError +  ` at ${msg[i]} box`
                            checking++
                        }
                        else
                        {
                            span.innerHTML += `, ${msg[i]} box`
                        }
                    }
                    if(msgForSpan1[i]!==0)
                    {
                        if(checking1===0)
                        {
                        span1.innerHTML = errorMsg1 +  ` at ${msg[i]} box`
                        checking1++
                        }
                        else
                        {
                            span1.innerHTML += `, ${msg[i]} box`
                        }
                    }
                    if(msgForSpan2[i]!==0)
                    {
                        if(checking2===0)
                        {
                        span2.innerHTML = errorMsg2 +  ` at ${msg[i]} box`
                        checking2++
                        }
                        else
                        {
                            span2.innerHTML += `, ${msg[i]} box`
                        }
                    }
                }
                if(span.innerHTML !== "" ) span.innerHTML += '.'
                if(span1.innerHTML !== "" ) span1.innerHTML += '.'
                if(span2.innerHTML !== "" ) span2.innerHTML += '.'
            }
            input[i].onblur = function () {
                if (input[i].classList.contains('successBorder') && isNaN(parseInt(input[i].value))) {
                    input[i].classList.remove('successBorder')
                }
            }
            // input[i].onclick = function () {
            //     if (!input[i].classList.contains('successBorder')) {
            //         input[i].classList.add('successBorder')
            //     }
            //     // kiem tra trang thai cua no co dang red hay ko
            //     if (!isNaN(input[i].value)) {
            //         const main = parseInt(input[i].value)
            //         if (!isNaN(main)) {
            //             var errorMsg = null;
            //             for (let i = 0; i < rulesArray.length; i++) {
            //                 errorMsg = rulesArray[i](main)
            //                 if (errorMsg) { break }
            //             }
            //             if (errorMsg) {
            //                 input[i].classList.remove('successBorder')
            //                 input[i].classList.add('warningBorder')
            //             }
            //         }
            //     }
            //     else {
            //         input[i].classList.remove('successBorder')
            //         input[i].classList.add('warningBorder')
            //     }
            // }
        }
    }
}
Validation.tooLarge = function (num) {
    return function (value) {
        return (value <= num) ? undefined : "The number is too large"
    }
}
Validation.smallerThan = function (num) {
    return function (value) {
        return (value > num) ? undefined : `The number must be larger than ${num}`
    }
}
// Tracking
function Tracking1(options)
{
    const span = document.querySelector(`.${options.parts} .tracking`)
    setInterval(()=>{
        var value1 = document.querySelector(`.${options.forTracking[0]} span`).innerHTML
        var value2 = document.querySelector(`.${options.forTracking[1]} span`).innerHTML
        var value3 = document.querySelector(`.${options.forTracking[2]} span`).innerHTML
        if(value1==="") {value1='0'}
        if(value2==="") {value2='0'}
        if(value3==="") {value3='0'}
        span.innerHTML = `Current marking: [${value1}.wait, ${value2}.inside, ${value3}.done]`
    },100)
}
function Tracking2(options)
{
    const span = document.querySelector(`.${options.parts} .tracking`)
    setInterval(()=>{
        var value1 = document.querySelector(`.${options.forTracking[0]} span`).innerHTML
        var value2 = document.querySelector(`.${options.forTracking[1]} span`).innerHTML
        var value3 = document.querySelector(`.${options.forTracking[2]} span`).innerHTML
        if(value1==="") {value1='0'}
        if(value2==="") {value2='0'}
        if(value3==="") {value3='0'}
        span.innerHTML = `Current marking: [${value1}.free, ${value3}.busy, ${value2}.docu]`
    },100)
}
function Tracking3(options)
{
    const span = document.querySelector(`.${options.parts} .tracking`)
    setInterval(()=>{
        var value1 = document.querySelector(`.${options.forTracking[0]} span`).innerHTML
        var value2 = document.querySelector(`.${options.forTracking[1]} span`).innerHTML
        var value3 = document.querySelector(`.${options.forTracking[2]} span`).innerHTML
        var value4 = document.querySelector(`.${options.forTracking[3]} span`).innerHTML
        var value5 = document.querySelector(`.${options.forTracking[4]} span`).innerHTML
        var value6 = document.querySelector(`.${options.forTracking[5]} span`).innerHTML
        if(value1==="") {value1='0'}
        if(value2==="") {value2='0'}
        if(value3==="") {value3='0'}
        if(value4==="") {value4='0'}
        if(value5==="") {value5='0'}
        if(value6==="") {value6='0'}
        span.innerHTML = `Current marking: [${value3}.wait, ${value1}.free, ${value6}.inside, ${value4}.busy, ${value2}.docu, ${value5}.done]`
    },100)
}
// checking
function Checking1(options)
{
    const input = document.querySelector(`.${options.parts} .checking input`)
    input.onclick = function()
    {
        var engine = setInterval(()=>{
            if(input.checked)
            {
                var value1 = document.querySelector(`.${options.statesForChecking[0]} span`).innerHTML
                var value2 = document.querySelector(`.${options.statesForChecking[1]} span`).innerHTML
                var value3 = document.querySelector(`.${options.statesForChecking[2]} span`).innerHTML
                if(value1==="") {value1=0}
                if(value2==="") {value2=0}
                if(value3==="") {value3=0}
                if(value1>0){
                    document.querySelector(`.${options.transitionsForChecking[0]}`).onclick()
                }
                else if(value2>0)
                {
                    document.querySelector(`.${options.transitionsForChecking[1]}`).onclick()
                }
            }
            else {clearInterval(engine)}
        },500)
    }
}
function Checking2(options)
{
    const input = document.querySelector(`.${options.parts} .checking input`)
    input.onclick = function()
    {
        var engine = setInterval(()=>{
            if(input.checked)
            {
                var value1 = document.querySelector(`.${options.statesForChecking[0]} span`).innerHTML
                var value2 = document.querySelector(`.${options.statesForChecking[1]} span`).innerHTML
                var value3 = document.querySelector(`.${options.statesForChecking[2]} span`).innerHTML
                if(value1==="") {value1=0}
                if(value2==="") {value2=0}
                if(value3==="") {value3=0}
                if(value1>0){
                    document.querySelector(`.${options.transitionsForChecking[1]}`).onclick()
                }
                else if(value3>0)
                {
                    document.querySelector(`.${options.transitionsForChecking[2]}`).onclick()
                }
                else if(value2>0)
                {
                    document.querySelector(`.${options.transitionsForChecking[0]}`).onclick()
                }
            }
            else {clearInterval(engine)}
        },500)
    }
}
function Checking3(options)
{
    const input = document.querySelector(`.${options.parts} .checking input`)
    input.onclick = function()
    {
        var engine = setInterval(()=>{
            if(input.checked)
            {
                var value1 = document.querySelector(`.${options.statesForChecking[0]} span`).innerHTML
                var value2 = document.querySelector(`.${options.statesForChecking[1]} span`).innerHTML
                var value3 = document.querySelector(`.${options.statesForChecking[2]} span`).innerHTML
                var value4 = document.querySelector(`.${options.statesForChecking[3]} span`).innerHTML
                var value5 = document.querySelector(`.${options.statesForChecking[4]} span`).innerHTML
                var value6 = document.querySelector(`.${options.statesForChecking[5]} span`).innerHTML
                if(value1==="") {value1=0}
                if(value2==="") {value2=0}
                if(value3==="") {value3=0}
                if(value4==="") {value4=0}
                if(value5==="") {value5=0}
                if(value6==="") {value6=0}
                if(value1>0 && value3>0){
                    document.querySelector(`.${options.transitionsForChecking[1]}`).onclick()
                }
                else if(value4>0 && value6>0)
                {
                    document.querySelector(`.${options.transitionsForChecking[2]}`).onclick()
                }
                else if(value2>0)
                {
                    document.querySelector(`.${options.transitionsForChecking[0]}`).onclick()
                }
            }
            else {clearInterval(engine)}
        },500)
    }
}