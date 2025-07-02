"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { JusoAddress } from "@/types/juso";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { Check, Copy, Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleSearch = async () => {
    const response = await axios.post<JusoAddress>('/api/address', {
      // currentPage: "1",
      // countPerPage: "10",
      keyword: searchQuery,
      // resultType: 'json',
      firstSort: 'none',
      start: "0",
      rows: "10",
      wt: 'xml',
      kind: 'road',
    });
    console.log(response.data);
  }

  const handleAddressSelect = () => {
  }

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <Card>
        <CardHeader>
          <CardTitle>한국 주소 검색</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="주소를 입력하세요 (예: 강서구 화곡로)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          {/* {searchResults.length > 0 && (
            <div className="space-y-2">
              <Label>검색 결과</Label>
              {searchResults.map((address) => (
                <div
                  key={address.id}
                  className="p-3 border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => handleAddressSelect()}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">도로명</Badge>
                      <span>{address.roadAddress}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">지번</Badge>
                      <span className="text-muted-foreground">{address.jibunAddress}</span>
                    </div>
                    {address.buildingName && (
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">건물명</Badge>
                        <span className="text-muted-foreground">{address.buildingName}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">우편번호</Badge>
                      <span className="text-muted-foreground">{address.zipCode}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )} */}
        </CardContent>
      </Card>

      {/* English Address Display */}
      {/* {englishAddress && (
        <Card>
          <CardHeader>
            <CardTitle>해외결제용 영문 주소</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="address1">Address Line 1 *</Label>
                <div className="flex gap-2">
                  <Input
                    id="address1"
                    value={englishAddress.addressLine1}
                    readOnly
                    className="bg-muted"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(englishAddress.addressLine1, 'address1')}
                  >
                    {copiedField === 'address1' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address2">Address Line 2</Label>
                <div className="flex gap-2">
                  <Input
                    id="address2"
                    value={englishAddress.addressLine2}
                    readOnly
                    className="bg-muted"
                    placeholder="(선택사항)"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(englishAddress.addressLine2, 'address2')}
                    disabled={!englishAddress.addressLine2}
                  >
                    {copiedField === 'address2' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <div className="flex gap-2">
                  <Input
                    id="city"
                    value={englishAddress.city}
                    readOnly
                    className="bg-muted"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(englishAddress.city, 'city')}
                  >
                    {copiedField === 'city' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State/Province *</Label>
                <div className="flex gap-2">
                  <Input
                    id="state"
                    value={englishAddress.state}
                    readOnly
                    className="bg-muted"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(englishAddress.state, 'state')}
                  >
                    {copiedField === 'state' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postal">Postal Code *</Label>
                <div className="flex gap-2">
                  <Input
                    id="postal"
                    value={englishAddress.postalCode}
                    readOnly
                    className="bg-muted"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(englishAddress.postalCode, 'postal')}
                  >
                    {copiedField === 'postal' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <div className="flex gap-2">
                  <Input
                    id="country"
                    value={englishAddress.country}
                    readOnly
                    className="bg-muted"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(englishAddress.country, 'country')}
                  >
                    {copiedField === 'country' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• 각 필드의 복사 버튼을 클릭하여 해외 결제창에 붙여넣기 하세요</p>
                <p>• Address Line 2는 아파트명이나 건물명이 있을 때만 사용됩니다</p>
                <p>• 실제 서비스에서는 도로명주소 API를 통해 정확한 주소를 검색할 수 있습니다</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )} */}
    </div>
  )
}