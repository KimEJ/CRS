# CRS

course
------

### Client

1. 위치, 시간을 정해 신청, Toss한다.

### Server

2. 신청을 받아 DB에 저장한다.
3. QR코드를 생성, TOSS한다.

### Client


4. QR코드를 받아 저장한다.
5. QR코드를 카메라에 인식시킨다.

### RaspberryPI


6. 전달받은 QR코드를 Server에 Toss한다.

### Server

7. 전달받은 QR코드를 분석, DB에서 확인한다.
8. RaspberryPI에 확인메세지를 Toss한다.

### RASPBERRYPI

9. 전달받은 메세지에 따라 문을 연다.

## DB 내용

1. 학생 정보 Table : member_tb
 * 학번 : student_number
 * 비밀번호 : password

2. 예약정보 Table : reservation_tb
 * 시작 일, 시 : start_time
 * 종료 일, 시 : stop_time
 * 위치 : location
 * 신청자 학번 : student_number
