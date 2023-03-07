function chg_back()
{
    
    if( $('#o_add_back_text').val() == 'back_add' )
    {
        $("#back_text").attr( "disabled", false );

    }
    else
    {
        $('#back_text').val('');
        $("#back_text").attr( "disabled", true );
    }
};

const DtabMenu = document.querySelectorAll('.d-tab-menu li')
const DtabContent = document.querySelectorAll('#d-tab-content > div')
function showContent(num)
{
    DtabContent.forEach(function(item){
        item.style.display = 'none';
    });
    DtabContent[num].style.display = 'block';
}
showContent(0);

DtabMenu.forEach(function(item,index){
    item.addEventListener('click', function(event){
        event.preventDefault();
        showContent(index);
    });
});

$( document ).ready(function() {
    before_process();
    call_qna();
    call_review();
});



//qna

function show_answer( val )
{
    if ( $('#answer_'+val).css('display') === 'none' ){ $('#answer_'+val).show(); }
    else { $('#answer_'+val).hide(); }
}


function call_qna()
{
    p_num = '<?=$p_num?>';
    qna_page = $('#qna_page').val();

    var form_data = { 
        p_num , p_num , 
        qna_page , qna_page
    };

    //console.log( form_data );

    $.ajax({
        type: "POST",
        url: "/ajax/load_detail_qna.php" ,
        data: form_data , 
        dataType: 'json' , 
        success: function( res )
        {
            //console.log( res );
            in_html = '';
            for( i=0; i<= res.list.length-1; i++ )
            {
                in_html += '<li>';
                in_html += '    <div id="qna_'+i+'" class="recently_order_inner" style="margin-bottom:10px;">';
                in_html += '            <span class="rlr_2 qna_title" style="cursor:pointer; " onclick="show_answer(\''+i+'\')" >';
                in_html += res.list[i]['title'];
                in_html += '            </span>';
                in_html += "        <span class='rlr_1'>"+res.list[i]['member_name']+"</span>";
                in_html += "        <span class='rlr_3'>"+res.list[i]['show_date_time']+"</span>";
                in_html += "        <span class='rlr_4'>"+res.list[i]['progress']+"</span>";
                in_html += '    </div>';
                in_html += '    <div id="answer_'+i+'" class="answer">';
                in_html += '                <p class="answer_inner">';
                in_html += res.list[i]['content'];
                in_html += '                </p>';
                if( res.list[i]['reply'] != '' )
                {
                in_html += '<br><ul class="qna_reply">';
                in_html += '<li> 관리자 :</li>';
                in_html += '<li>';
                in_html += res.list[i]['reply'];
                in_html += '</li>';
                in_html += '</ul>';
                }
                in_html += '    </div>';
                in_html += '</li>';
            }

            $('#qna_lists').html(in_html);
            $('#qna_paging').html(res.paging);

        }
    });
}

function qna_paging( val )
{
    //console.log( val );
    $('#qna_page').val( val );
    call_qna();
}


// review

function call_review()
{
    p_num = '<?=$p_num?>';
    review_page = $('#review_page').val();

    var form_data = { 
        p_num , p_num , 
        review_page , review_page
    };

    $.ajax({
        type: "POST",
        url: "/ajax/load_detail_review.php" ,
        data: form_data , 
        dataType: 'json' , 
        success: function( res )
        {
            //console.log( res );
            in_html = '';
            for( i=0; i<= res.list.length-1; i++ )
            {
                in_html += '<li style="width:calc(48% - 5px); display:inline-block; padding:10px;">';
                in_html += '    <div style="width:100%; border:1px solid #EAEAEA;">';
                in_html += '        <div style="width:40%; display:inline-block; " style="text-align:center; ">';
                if( res.list[i]['upload'] == '' || res.list[i]['upload'] == null ) { }
                else{
                in_html += '            <img src="/data/review/'+res.list[i]['p_num']+'/'+res.list[i]['upload']+'" style = "width:100%; ">';
                }
                in_html += '        </div>';
                in_html += '        <div style = "width:calc(60% - 5px); display:inline-block;" >';
                in_html += '        <div style = "width:100%; ">';
                in_html += '            <span class="rlr_2 review_title" style="cursor:pointer;">'+res.list[i]['title']+'</span>';
                in_html += '            <dl class = "review_content" style="display:none;">';
                in_html += '                <dd>';
                in_html += res.list[i]['content'];
                in_html += '                </dd>';
                in_html += '            </dl>';
                in_html += '        </div>';
                in_html += '        <div style = "width:100%"><span >작성자</span><span >'+res.list[i]['member_name']+'</span></div>';
                in_html += '        <div style = "width:100%"><span >작성일</span><span >'+res.list[i]['show_date_time']+'</span></div>';
                in_html += '        </div>';


                in_html += '    </div>';
                in_html += '</li>';
            }
            $('#review_lists').html(in_html);
            $('#review_paging').html(res.paging);

        }
    });

}