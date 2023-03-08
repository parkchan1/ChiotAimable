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

// $( document ).ready(function() {
//     before_process();
//     call_qna();
//     call_review();
// });



//QnA 모달 오픈
$('#write_qna').on('click', function(){
    {
    $('.qna_modal_bg').show();
    $('.qna_modal_wrap').show();
    $('html, body').removeClass('hidden')  
    alert("로그인 후 사용가능합니다.");
    }
});

//QnA 닫기
$('#qna_modal_close_btn').on('click', function(){
    //작성내용 리셋
    qna_reset();
    $('.qna_modal_bg').hide();
    $('.qna_modal_wrap').hide();
    $('html, body').removeClass('hidden')  
});

function qna_reset()
{
    $('#qna_title').val('');
    $('#secret_chk').prop("checked", false);
    $('#qna_content').val('');
}

function show_answer( val )
{
    if ( $('#answer_'+val).css('display') === 'none' ){ $('#answer_'+val).show(); }
    else { $('#answer_'+val).hide(); }
}




// Review
//review_img_change
function up_img_1(input)
{
	console.log("변경");
    if(input.files && input.files[0])
	{
        var reader = new FileReader();
        reader.onload = function (e)
		{
            $( "#det_img_1" ).attr("src", e.target.result );
            $( "#det_img_1" ).addClass( "details_sub_img" );
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#up_img_1").on('change', function(){
    up_img_1(this);
});

// change-end

$('#write_review').on('click', function(){
    $('.review_modal_bg').show();
    $('.review_modal_wrap').show();
    $('html, body').removeClass('hidden')  
});

 $('#review_write_btn').on('click', function(){
        if( $('#review_title').val() == '' )
        {
            alert("제목을 작성하여 주십시오.");
            return false;
        }
        if( $('#review_content').val() == '' )
        {
            alert("질문 내용을 작성하여 주십시오.");
            return false;
        }

        if($("#up_img_1").val() != "")
        {	
            var maxSize = 6.5 * 1024 * 1024; // 4MB

            var fileSize = $("#up_img_1")[0].files[0].size;
            if(fileSize > maxSize)
            {
                alert("첨부파일 사이즈는 6MB 이내로 등록 가능합니다.");
                $("#up_img_1").val("");
                return false;
            }
        }
    });

    //QnA 닫기
    $('#review_modal_close_btn').on('click', function(){
        //작성내용 리셋
        review_reset();
        $('.review_modal_bg').hide();
        $('.review_modal_wrap').hide();
        $('html, body').removeClass('hidden')  
    });

    function review_reset()
    {
        $('#review_title').val('');
        $('#review_content').val('');
        $('#up_img_1').val('');
    }

    $("#img_delete").click(function(event) {
	$( "#det_img_1" ).attr("src", "../../images/noimg.jpg" );
	$('#up_img_1').val('');
    });


