//콤마찍기
function add_comma(str)
{
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

//콤마풀기
function uncomma(str)
{
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

function go_back()
{
    history.back(-1);
}

 


// 주소찾기
