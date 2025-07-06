/**
 * API 응답 전체 타입
 */
export interface EngAddressSearchApiResponse {
  /**
   * 응답 결과 객체
   */
  results: {
    /** 공통 응답 정보 */
    common: Common;
    /** 주소 항목 배열 */
    juso: EngJusoItem[];
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
 * 주소 항목 정보
 */
export interface EngJusoItem {
  /** 영문 도로명 주소 */
  roadAddr: string;
  /** 영문 지번 주소 */
  jibunAddr: string;
  /** 우편번호 */
  zipNo: string;
  /** 행정구역 코드 */
  admCd: string;
  /** 도로명코드 일련번호 */
  rnMgtSn: string;
  /** 건물종별코드 */
  bdKdcd: string;
  /** 시도 (영문) */
  siNm: string;
  /** 시군구 (영문) */
  sggNm: string;
  /** 읍면동 (영문) */
  emdNm: string;
  /** 리명 (영문, 빈 문자열 가능) */
  liNm: string;
  /** 도로명 (영문) */
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
  /** 한글 주소 */
  korAddr: string;
}