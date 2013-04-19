$(document).ready
(

	function()
	{
		$('#goBack').click(
			function()
			{
				window.frames['MainFrm'].history.go(-1);
			}
		);
		$("#goForward").click(
			function()
			{
				window.frames['MainFrm'].history.go(1);
			}
		);
		$("#run").click(
			function()
			{
				var url = $("#urlInput").val();
				if(url !== "")
				{
					$("#MainFrm").attr("src",url);
					localStorage.setItem("show_page",url);
				}
			}
		);

		$("#addBookmark").click(
			function()
			{
				var frm = $("#MainFrm").get(0);
				console.log(frm.contentWindow.document.title);
			}
		);
		$("#getBookmark").click(
			function()
			{
				bm = localStorage.getItem("");
			}
		);
		$('#MainFrm').ready(
			function()
			{
                if(localStorage.getItem('show_page')!==null &&
                   localStorage.getItem('show_page')!=="about:blank")
				{
					show_page = localStorage.getItem('show_page');
				}
				else
				{
					show_page = "";
				}
				console.log(show_page);

				$("#MainFrm").attr("src",show_page);
			}
		);
	}
);
