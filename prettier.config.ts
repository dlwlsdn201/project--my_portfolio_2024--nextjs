const config = {
  semi: true, // 마지막에 세미콜론 자동 생성.
  printWidth: 80, // 줄바꿈 길이 단위 80
  endOfLine: "auto", // 파일 마지막에 EOL 보장
  singleQuote: true, // 홑따옴표 사용
  jsxSingleQuote: true, // jsx 구문에서 큰 따옴표 대신 홑 따옴표 사용
  useTabs: false, // 탭을 사용하지 않고 스페이스를 사용.
  tabWidth: 2, // 탭을 할 경우 적용되는 스페이스 길이
  trailingComma: "all", // 여러줄로 나뉘었을 때는 쉼표를 사용
  bracketSpacing: true, // 객체 리터럴의 괄호 사이에 공백을 삽입
  bracketSameLine: false, // ">" 괄호 줄 바꿈
  arrowParens: "avoid", // 화살표 함수에서 파라미터가 1개일 경우, 괄호 생략
};

export default config;
