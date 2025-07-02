/** 전체 응답 구조 */
export interface JusoResponse {
  results: {
    common: CommonResult;
    juso: JusoAddress[];
  };
}

/** 공통 응답 정보 */
export interface CommonResult {
  /** 전체 검색 결과 건수 */
  totalCount: string;

  /** 현재 페이지 번호 */
  currentPage: string;

  /** 페이지당 출력 건수 */
  countPerPage: string;

  /** 에러 코드 ("0"이면 정상) */
  errorCode: string;

  /** 에러 메시지 또는 "정상" */
  errorMessage: string;
}

/** 개별 주소 정보 */
export interface JusoAddress {
  /** 전체 도로명 주소 (지번 포함) */
  roadAddr: string;

  /** 도로명 주소 (건물명, 괄호 제외) */
  roadAddrPart1: string;

  /** 상세주소 (예: "(청담동)") */
  roadAddrPart2: string;

  /** 지번 주소 */
  jibunAddr: string;

  /** 영문 도로명 주소 */
  engAddr: string;

  /** 5자리 도로명 우편번호 */
  zipNo: string;

  /** 행정구역 코드 (법정동 코드) */
  admCd: string;

  /** 도로명코드 (도로관리번호) */
  rdMgtSn: string;

  /** 건물관리번호 */
  bdMgtSn: string;

  /** 상세 건물명 리스트 (예: "A동,B동") */
  detBdNmList: string;

  /** 건물명 */
  bdNm: string;

  /** 시/도 이름 */
  siNm: string;

  /** 시/군/구 이름 */
  sggNm: string;

  /** 읍/면/동 이름 */
  emdNm: string;

  /** 리 이름 (없는 경우 공백) */
  liNm: string;

  /** 도로명 (예: "도산대로100길") */
  rn: string;

  /** 건물 본번 (숫자 주소) */
  buldMnnm: string;

  /** 건물 부번 (없는 경우 "0") */
  buldSlno: string;

  /** 지번 본번 */
  lnbrMnnm: string;

  /** 지번 부번 */
  lnbrSlno: string;

  /** 건물 구분 코드 (0: 일반, 1: 공동주택 등) */
  bdKdcd: string;

  /** 지하 여부 (0: 지상, 1: 지하) */
  udrtYn: string;

  /** 산 여부 (0: 일반, 1: 산) */
  mtYn: string;

  /** 폐지 여부 (0: 사용, 1: 폐지) */
  hstryYn: string;

  /** 연관 지번 (구주소 형태 연결 시 사용) */
  relJibun: string;

  /** 행정동 이름 */
  hemdNm: string;
}