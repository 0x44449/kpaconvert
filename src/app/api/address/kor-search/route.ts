import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // 전달받은 GET 파라미터로 다시 요청
    // https://business.juso.go.kr/addrlink/addrEngApiJsonp.do
    // param: currentPage, countPerPage, keyword
    const { searchParams } = new URL(request.url);

    const params = {
      currentPage: searchParams.get('currentPage') || '1',
      countPerPage: searchParams.get('countPerPage') || '10',
      keyword: searchParams.get('keyword') || '',
      confmKey: process.env.KOR_JUSO_CONF_KEY,
      resultType: 'json',
    };
    console.log('Request Params:', params);

    const { data } = await axios.get(
      'https://business.juso.go.kr/addrlink/addrLinkApi.do',
      { params }
    );
    
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}