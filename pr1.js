let output = document.querySelector('.btn');

let bill = 0.0;
let tip_perc = 0.0;
let x = document.querySelector('#bill');
let y = document.querySelector('#tip');
let flag = false;

const h4 = document.querySelector('.output');


output.addEventListener('click',e=>{


    if(Number(x.value) > 0 && Number(y.value) > 0)
    {
        bill = Number(x.value);
        console.log('Entered bill  in rupees = '+bill);
        tip_perc = Number(y.value);
        console.log('Entered tip  in percentage = '+tip_perc);

        
        console.log('tip = '+tip_perc);
        if(tip_perc <= 0.0 || tip_perc >100.0)
        {
            y.setAttribute('placeholder', ' Enter valid Percentage');
            y.value = '';
            flag = false;
        }
        else
        {
            
            x.setAttribute('placeholder', '');
            x.value = '';
            y.setAttribute('placeholder', '');
            y.value = '';
            flag = true;
        }
        


    }
    else if((Number(x.value) == 0 && Number(y.value) > 0))
    {
        x.setAttribute('placeholder', ' Enter valid value');
    }
    else if((Number(x.value) > 0 && Number(y.value) == 0))
    {
        y.setAttribute('placeholder', ' Enter valid value');
    }
    else
    {
        x.setAttribute('placeholder', ' Enter valid value');
        y.setAttribute('placeholder', ' Enter valid value');
    }

    if(flag == true)
    {
        let calc_tip = bill+= bill*(tip_perc/100);
        h4.textContent = 'Tip = Rs.'+calc_tip;
        bill = 0.0 , tip_perc = 0.0;
        calc_tip = 0.0;
    }
    else
    {
        h4.textContent ='Tip = Rs. __ __';
    }
    flag = false;

})
