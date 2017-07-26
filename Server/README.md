# Server

###GET /check
 * 어느 방이 남았는지 확인하는 route
 * 1차원 배열로 방ID를 TOSS

###POST /reservation
 * 방 예약하는 route



서버 라우팅 path와 HTTP METHOD 정리
-----------------------------------

POST 	/accounts/signin		//로그인

	payload : student_number, password


DELETE 	/accounts/signout	//로그아웃

	payload : NULL


GET		/confirm/{card_number}	//예약 확인

	payload : card_number, location


GET 	/time/view				//예약 상태 확인

	payload : NULL


POST 	/time/add				//예약

	payload : start_time, stop_time, location, student_number
