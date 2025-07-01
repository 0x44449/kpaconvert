"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export interface PostcodeData {
  zonecode: string;
  address: string;
  addressEnglish: string;
  addressType: "R" | "J";
  userSelectedType: "R" | "J";
  noSelected: "Y" | "N";
  userLanguageType: "K" | "E";

  roadAddress: string;
  roadAddressEnglish: string;
  jibunAddress: string;
  jibunAddressEnglish: string;

  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;

  buildingCode: string;
  buildingName: string;
  apartment: "Y" | "N";

  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguEnglish: string;
  sigunguCode: string;

  roadnameCode: string;
  roadname: string;
  roadnameEnglish: string;

  bcode: string;
  bname: string;
  bnameEnglish: string;

  bname1: string;
  bname1English: string;
  bname2: string;
  bname2English: string;

  hname: string;
  query: string;

  // deprecated 항목 (현재는 제공되지 않음)
  postcode?: string;
  postcode1?: string;
  postcode2?: string;
  postcodeSeq?: string;
}


const PostcodeEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ height, setHeight ] = useState(500);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const { daum } = window as any;
    if (!daum?.Postcode) return;

    const themeObj = {
      bgColor: "#FFFFFF", //바탕 배경색
      searchBgColor: "#F7F7F7", //검색창 배경색
      //contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
      //pageBgColor: "", //페이지 배경색
      //textColor: "", //기본 글자색
      //queryTextColor: "", //검색창 글자색
      //postcodeTextColor: "", //우편번호 글자색
      //emphTextColor: "", //강조 글자색
      // outlineColor: "#FFFFFF", //테두리
    };

    const postcode = new daum.Postcode({
      oncomplete: (data: PostcodeData) => {
        console.log("선택된 주소 결과:", data);
        // 여기서 setState로 외부 전달하거나 처리 가능
      },
      onresize: (size: { width: number, height: number }) => {
        setHeight(size.height + 4);
      },
      width: "100%",
      height: "100%",
      theme: themeObj,
    });

    postcode.embed(containerRef.current, {
      autoClose: false
    });
  }, []);

  return (
    <>
      <Script
        src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="beforeInteractive"
      />
      <div
        ref={containerRef}
        style={{ width: "100%", height: `${height}px` }}
        // className="w-full h-full border border-gray-500"
        className="border border-gray-500"
      />
    </>
  );
};

export default PostcodeEmbed;