/**
 * 한글 주소 검색 API 전체 응답 타입
 */
export interface KorAddressSearchApiResponse {
  /**
   * 응답 결과 객체
   */
  results: {
    /** 공통 응답 정보 */
    common: Common;
    /** 한글 주소 검색 결과 배열 */
    juso: KorJusoItem[];
  };
}

/**
 * 공통 응답 정보
 */
export interface Common {
  /** 전체 검색 결과 수 */
  totalCount: string;
  /** 현재 페이지 번호 */
  currentPage: string;
  /** 페이지당 결과 수 */
  countPerPage: string;
  /** 에러 코드 ("0"이면 정상) */
  errorCode: string;
  /** 에러 메시지 */
  errorMessage: string;
}

/**
 * 한글 주소 검색 개별 항목
 */
export interface KorJusoItem {
  /** 한글 전체 도로명 주소 */
  roadAddr: string;
  /** 한글 도로명 주소(1) */
  roadAddrPart1: string;
  /** 한글 도로명 주소(2) */
  roadAddrPart2: string;
  /** 영문 도로명 주소 */
  engAddr: string;
  /** 한글 지번 주소 */
  jibunAddr: string;
  /** 우편번호 */
  zipNo: string;
  /** 행정구역 코드 */
  admCd: string;
  /** 도로명코드 일련번호 */
  rnMgtSn: string;
  /** 건물관리번호 */
  bdMgtSn: string;
  /** 상세 건물명 목록 (콤마 구분) */
  detBdNmList: string;
  /** 대표 건물명 */
  bdNm: string;
  /** 건물종별코드 */
  bdKdcd: string;
  /** 시도명 (한글) */
  siNm: string;
  /** 시군구명 (한글) */
  sggNm: string;
  /** 읍면동명 (한글) */
  emdNm: string;
  /** 리명 (한글, 빈 문자열 가능) */
  liNm: string;
  /** 도로명 (한글) */
  rn: string;
  /** 지하여부 ("0" or "1") */
  udrtYn: string;
  /** 건물 본번 */
  buldMnnm: string;
  /** 건물 부번 */
  buldSlno: string;
  /** 산 여부 ("0" or "1") */
  mtYn: string;
  /** 지번 본번 */
  lnbrMnnm: string;
  /** 지번 부번 */
  lnbrSlno: string;
  /** 읍면동 일련번호 */
  emdNo: string;
  /** 이력 정보 여부 ("0" or "1") */
  hstryYn: string;
  /** 관계 지번 (대지/블럭 정보) */
  relJibun: string;
  /** 한글 기본 주소 (시도+시군구+읍면동) */
  hemdNm: string;
}