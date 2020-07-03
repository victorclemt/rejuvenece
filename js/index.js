var b1 = 0;
var b2 = 0;
var origin = "";
var pixel = "";
$(document).ready(function()
{
    $("body").mouseleave(function()
    {
        if(b1 == 0)
        {
			origin = "Pop up abandono";
            $(".formulario").css("top", "0%");
            b1 = 1;
        }
    });

    setTimeout(function()
    {
        $(".advice1").css("bottom", "0%");
    }, 1000);

    $(".close1").click(function()
    {
        $(".advice1").css("bottom", "-100%");
    });

    $(".send2").click(function()
    {
        $(".formulario").css("top", "0%");
		
		pixel = "<script>\n"+
			  "!function(f,b,e,v,n,t,s)\n"+
			  "{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n"+
			  "n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n"+
			  "if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n"+
			  "n.queue=[];t=b.createElement(e);t.async=!0;\n"+
			  "t.src=v;s=b.getElementsByTagName(e)[0];\n"+
			  "s.parentNode.insertBefore(t,s)}(window, document,'script',\n"+
			  "'https://connect.facebook.net/en_US/fbevents.js');\n"+
			  "fbq('init', '3041280829298529');\n"+
			  "fbq('track', 'ViewContent');\n"+
			"</script>"+
			'<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3041280829298529&ev=ViewContent&noscript=1" /></noscript>';
		$(".formulario").prepend(pixel);
    });

    $(".button1").click(function()
    {
        origin = "Botón top banner";
    });

    $(".button3").click(function()
    {
        origin = "Botón contactanos";
    });

    $(".close2").click(function()
    {
        $(".formulario").css("top", "-100%");
    });

    $("#send1").click(function()
	{
		parametros = "&"+$("#form1").serialize();
		origin = "Formato principal";
        formulario(parametros);
	});

    $("#send2").click(function()
	{
		parametros = "&"+$("#form2").serialize();
        formulario(parametros);
    });

    $(".message1").click(function()
	{
        $(".message1").css("display", "none");
    });

});

function formulario(parametros)
{
    var v3=".back/send.php?"+parametros+"&origin="+origin;
    data = new FormData();
    $.ajax
    ({
        async: true,
        url: v3,
        type: 'POST',
        data: data,
        cache: false,
        processData: false,
        contentType: false,
        dataType:"json",
        success: function(data)
        {
            $(".message1").html(data.msg);
            $(".message1").css("display", "flex");

            setTimeout(function()
            {
                $(".message1").css("display", "none");
            }, 2000);
        }
    });
}