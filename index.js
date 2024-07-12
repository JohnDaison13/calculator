let calc=localStorage.getItem('calc')||'';
    let screen=document.getElementById('screen');
    display();
    function update(value)
    {
        calc+=value;
        display();
        localStorage.setItem('calc', calc);

    }
    function display()
    {
        screen.innerHTML=calc;
    }