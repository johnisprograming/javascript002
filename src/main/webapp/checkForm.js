/**
 * checkForm.js  : 폼 유효성 확인
 */

window.onload = function() {
	// id가 joinForm인 폼의  submit 버튼이 눌러졌을 때 수행되는 이벤트 처리
	document.getElementById('joinForm').onsubmit = function() {
		
		// 성명을 입력하지 않은 경우 경고창 출력
		// id로 찾아와서 
		var name = document.getElementById('name');
		
		// 값이 비었는지 확인하고, 비었으면 경고창 출력, 입력란에 포커스 주고, 서버로 전송되지 않게 함(다음 페이지로 이동 못하게)
		if(name.value == ""){
			alert("성명을 입력하세요.");
			name.focus();
			return false; // 서버로 전송되지 않게 함(다음 페이지로 이동 못하게)
		}
		
		// 아이디를 입력하지 않은 경우 
		// "아이디를 입력하세요" 출력, 아이디 입력란에 포커스
		var id = document.getElementById('id');
		
		if(id.value == "") {
			alert("아이디를 입력하세요.");
			id.focus();
			return false;	
		}

		
		// 아이디를 6~10자가 안되게 입력하였을 경우
		// "아이디는 6~10자로 입력하세요" 경고창 출력
		// 아이디 입력란에 입력한 내용 삭제하고
		// 아이디 입력란에 포커스
		
		
		
	};	 // onsubmit 끝
};  // window.onload 끝



