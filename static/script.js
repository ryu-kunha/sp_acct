// 샘플 학생 데이터 (나중에 서버나 파일로 대체 가능)
const studentAccounts = [
  { id: "20240101", name: "김민준", email: "20240101@school.edu", password: "mj1234" },
  { id: "20240102", name: "이지은", email: "20240102@school.edu", password: "je1234" },
  { id: "20240103", name: "박서준", email: "20240103@school.edu", password: "sj1234" }
  { id: "20240104", name: "홍길동", email: "20240104@school.edu", password: "sj1234" }
];

// 폼 제출 시 검색 수행
document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault(); // 기본 제출 동작 막기

  const inputId = document.getElementById('studentId').value.trim();
  const inputName = document.getElementById('studentName').value.trim();

  const resultDiv = document.getElementById('result');

  if (!inputId || !inputName) {
    resultDiv.innerHTML = `<p>⚠️ 학번과 이름을 모두 입력해주세요.</p>`;
    return;
  }

  // 학생 데이터 검색
  const student = studentAccounts.find(
    (stu) => stu.id === inputId && stu.name === inputName
  );

  // 결과 출력
  if (student) {
    resultDiv.innerHTML = `
      <p><strong>✅ 구글 계정 정보</strong></p>
      <p><strong>ID:</strong> ${student.email}</p>
      <p><strong>PW:</strong> ${student.password}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>❌ 해당 정보를 찾을 수 없습니다.</p>`;
  }
});
