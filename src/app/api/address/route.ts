import { NextRequest, NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch('http://127.0.0.1:8983/app/search/addrEngSearch.do', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Accept': 'application/json',
      },
      body: new URLSearchParams(body).toString(),
    });

    if (!response.ok) {
      const message = `HTTP error! status: ${response.status}, message: ${await response.text()}`;
      console.error(message);
      throw new Error(message);
    }

    // const xmlData = await response.text();
    
    // // XML을 JSON으로 변환
    // const data = await parseStringPromise(xmlData, {
    //   explicitArray: false,  // 배열을 강제하지 않음
    //   ignoreAttrs: false,    // 속성 유지
    //   mergeAttrs: true,      // 속성을 텍스트와 병합
    //   trim: true,            // 공백 제거
    // });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch address data' },
      { status: 500 }
    );
  }
}