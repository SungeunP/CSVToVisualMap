		// 나라명과 나라코드의 배열 오브젝트
        const countriesObject = {
            countries: [
                ["안도라", "AND"],
                ["앤티가 바부다", "ANT"],
                ["아르헨티나", "ARG"],
                ["아르메니아", "ARM"],
                ["아루바", "ARU"],
                ["아메리칸사모아", "ASA"],
                ["오스트레일리아", "AUS"],
                ["오스트리아", "AUT"],
                ["아제르바이잔", "AZE"],
                ["바베이도스", "BAR"],
                ["부룬디", "BDI"],
                ["벨기에", "BEL"],
                ["베냉", "BEN"],
                ["버뮤다", "BER"],
                ["보스니아", "BIH"],
                ["벨라루스", "BLR"],
                ["볼리비아", "BOL"],
                ["리비아", "LBY"],
                ["브라질", "BRA"],
                ["바레인", "BRN"],
                ["브루나이", "BRU"],
                ["중앙아프리카 공화국", "CAF"],
                ["캄보디아", "CAM"],
                ["캐나다", "CAN"],
                ["케이맨 제도", "CAY"],
                ["차드", "CHA"],
                ["중화인민공화국", "CHN"],
                ["코트디부아르", "CIV"],
                ["카메룬", "CMR"],
                ["쿡 제도", "COK"],
                ["콜롬비아", "COL"],
                ["코모로", "COM"],
                ["카보베르데", "CPV"],
                ["크로아티아", "CRO"],
                ["쿠바", "CUB"],
                ["키프로스", "CYP"],
                ["체코", "CZE"],
                ["지부티", "DJI"],
                ["도미니카 연방", "DMA"],
                ["도미니카 공화국", "DOM"],
                ["에콰도르", "ECU"],
                ["이집트", "EGY"],
                ["크로아티아", "HRV"],
                ["라트비아", "LVA"],
                ["에리트레아", "ERI"],
                ["엘살바도르", "ESA"],
                ["스페인", "ESP"],
                ["에스토니아", "EST"],
                ["에티오피아", "ETH"],
                ["피지", "FIJ"],
                ["핀란드", "FIN"],
                ["프랑스", "FRA"],
                ["미크로네시아 연방", "FSM"],
                ["칠레", "CHL"],
                ["가봉", "GAB"],
                ["네팔", "NPL"],
                ["영국", "GBR"],
                ["조지아", "GEO"],
                ["그린란드", "GRL"],
                ["가나", "GHA"],
                ["그레나다", "GRN"],
                ["괌", "GUM"],
                ["가이아나", "GUY"],
                ["홍콩", "HKG"],
                ["헝가리", "HUN"],
                ["인도", "IND"],
                ["이란", "IRN"],
                ["아일랜드", "IRL"],
                ["이라크", "IRQ"],
                ["아이슬란드", "ISL"],
                ["이스라엘", "ISR"],
                ["미국령버진아일랜드", "ISV"],
                ["이탈리아", "ITA"],
                ["영국령버진아일랜드", "IVB"],
                ["자메이카", "JAM"],
                ["요르단", "JOR"],
                ["일본", "JPN"],
                ["카자흐스탄", "KAZ"],
                ["케냐", "KEN"],
                ["키르기스스탄", "KGZ"],
                ["키리바시", "KIR"],
                ["대한민국", "KOR"],
                ["코소보", "KOS"],
                ["사우디아라비아", "SAU"],
                ["쿠웨이트", "KWT"],
                ["라오스", "LAO"],
                ["라트비아", "LAT"],
                ["리비아", "LBA"],
                ["라이베리아", "LBR"],
                ["세인트루시아", "LCA"],
                ["레소토", "LES"],
                ["레바논", "LIB"],
                ["리히텐슈타인", "LIE"],
                ["리투아니아", "LTU"],
                ["룩셈부르크", "LUX"],
                ["마다가스카르", "MAD"],
                ["모로코", "MAR"],
                ["말레이시아", "MYS"],
                ["말라위", "MAW"],
                ["몰도바", "MDA"],
                ["몰디브", "MDV"],
                ["멕시코", "MEX"],
                ["몽골", "MGL"],
                ["마셜 제도", "MHL"],
                ["마케도니아 공화국", "MKD"],
                ["말리", "MLI"],
                ["몰타", "MLT"],
                ["몬테네그로", "MNE"],
                ["모나코", "MON"],
                ["모잠비크", "MOZ"],
                ["모리셔스", "MRI"],
                ["모리타니", "MTN"],
                ["미얀마", "MYA"],
                ["나미비아", "NAM"],
                ["니카라과", "NCA"],
                ["네팔", "NEP"],
                ["니제르", "NIG"],
                ["노르웨이", "NOR"],
                ["나우루", "NRU"],
                ["뉴질랜드", "NZL"],
                ["오만", "OMA"],
                ["파키스탄", "PAK"],
                ["파나마", "PAN"],
                ["파라과이", "PAR"],
                ["페루", "PER"],
                ["팔레스타인", "PLE"],
                ["팔라우", "PLW"],
                ["파푸아뉴기니", "PNG"],
                ["폴란드", "POL"],
                ["조선민주주의인민공화국", "PRK"],
                ["푸에르토리코", "PUR"],
                ["카타르", "QAT"],
                ["루마니아", "ROU"],
                ["남아프리카", "ZAF"],
                ["러시아", "RUS"],
                ["르완다", "RWA"],
                ["사모아", "SAM"],
                ["세네갈", "SEN"],
                ["세이셸", "SEY"],
                ["세인트헬레나", "SHN"],
                ["싱가포르", "SIN"],
                ["세인트키츠네비스", "SKN"],
                ["시에라리온", "SLE"],
                ["슬로베니아", "SLO"],
                ["산마리노", "SMR"],
                ["솔로몬 제도", "SOL"],
                ["소말리아", "SOM"],
                ["세르비아", "SRB"],
                ["스리랑카", "SRI"],
                ["남수단", "SSD"],
                ["상투메 프린시페", "STP"],
                ["수단", "SUD"],
                ["수리남", "SUR"],
                ["슬로바키아", "SVK"],
                ["스웨덴", "SWE"],
                ["스와질란드", "SWZ"],
                ["시리아", "SYR"],
                ["탄자니아", "TAN"],
                ["통가", "TGA"],
                ["태국", "THA"],
                ["타지키스탄", "TJK"],
                ["투르크메니스탄", "TKM"],
                ["동티모르", "TLS"],
                ["토고", "TOG"],
                ["중화 타이베이", "TPE"],
                ["트리니다드 토바고", "TTO"],
                ["튀니지", "TUN"],
                ["터키", "TUR"],
                ["투발루", "TUV"],
                ["우간다", "UGA"],
                ["우크라이나", "UKR"],
                ["우루과이", "URU"],
                ["미국", "USA"],
                ["우즈베키스탄", "UZB"],
                ["바누아투", "VAN"],
                ["베네수엘라", "VEN"],
                ["세인트빈센트 그레나딘", "VIN"],
                ["예멘", "YEM"],
                ["잠비아", "ZAM"],
                ["짐바브웨", "ZIM"],
                ["아프가니스탄", "AFG"],
                ["앙골라", "AGO"],
                ["알바니아", "ALB"],
                ["아랍에미리트", "ARE"],
                ["남극", "ATA"],
                ["프랑스령 남방 및 남극", "ATF"],
                ["부르키나파소", "BFA"],
                ["방글라데시", "BGD"],
                ["불가리아", "BGR"],
                ["바하마", "BHS"],
                ["벨리즈", "BLZ"],
                ["부탄", "BTN"],
                ["보츠와나", "BWA"],
                ["스위스", "CHE"],
                ["콩고 공화국", "COG"],
                ["콩고 민주 공화국", "COD"],
                ["코스타리카", "CRI"],
                ["북키프로스", "-99"],
                ["독일", "DEU"],
                ["덴마크", "DNK"],
                ["알제리", "DZA"],
                ["피지", "FJI"],
                ["포클랜드 제도", "FLK"],
                ["프랑스령 기아나", "GUF"],
                ["기니", "GIN"],
                ["감비아", "GMB"],
                ["기니비사우", "GNB"],
                ["적도 기니", "GNQ"],
                ["그리스", "GRC"],
                ["과테말라", "GTM"],
                ["온두라스", "HND"],
                ["아이티", "HTI"],
                ["인도네시아", "IDN"],
                ["이란", "IRN"],
                ["캄보디아", "KHM"],
                ["코소보", "-99"],
                ["레바논", "LBN"],
                ["리비아", "LBY"],
                ["스리랑카", "LKA"],
                ["레소토", "LSO"],
                ["라트비아", "LVA"],
                ["마다가스카르", "MDG"],
                ["미얀마", "MMR"],
                ["몽골", "MNG"],
                ["모리타니", "MRT"],
                ["말라위", "MWI"],
                ["누벨칼레도니", "NCL"],
                ["니제르", "NER"],
                ["나이지리아", "NGA"],
                ["니카라과", "NIC"],
                ["네덜란드", "NLD"],
                ["네팔", "NPL"],
                ["오만", "OMN"],
                ["필리핀", "PHL"],
                ["푸에르토리코", "PRI"],
                ["포르투갈", "PRT"],
                ["파라과이", "PRY"],
                ["서사하라", "ESH"],
                ["수단", "SDN"],
                ["세네갈", "SEN"],
                ["솔로몬 제도", "SLB"],
                ["엘살바도르", "SLV"],
                ["소말릴란드", "-99"],
                ["슬로베니아", "SVN"],
                ["차드", "TCD"],
                ["토고", "TGO"],
                ["타이완", "TWN"],
                ["탄자니아", "TZA"],
                ["우루과이", "URY"],
                ["베트남", "VNM"],
                ["바누아투", "VUT"],
                ["요르단 강 서안 지구", "PSE"],
                ["남아프리카 공화국", "ZAF"],
                ["잠비아", "ZMB"],
                ["짐바브웨", "ZWE"],
            ]
        };
        
        var maxInterest = -1,
            minInterest = -1;
        var words = new Array();
        var terms = new Array();
        var Settings = {
            style : {
                interestColor : "rgba(0,84,255,", // rgba(red,green,blue,
                defaultColor : "#d8d8d8",
                wordsColor : ["rgb(66,133,244)", // if Words.length != 1 use this
                              "rgb(219,68,55)",
                              "rgb(244,180,0)",
                              "rgb(15,157 88)",
                              "rgb(171,71,188)"
                             ]
            },
            parse : {
                delimiter: ',', // 구분자
                newline: "\n", // 줄바꿈 구분 (default)
                quoteChar: '"',
                header: false,
                dynamicTyping: false,
                preview: 0,
                encoding: "utf-8",
                worker: false,
                comments: false,
                step: undefined,
                complete: "",
                error: undefined,
                download: false,
                skipEmptyLines: false,
                chunk: undefined,
                beforeFirstChunk: undefined,
                fastMode: undefined,
                withCredentials: undefined
            },
            transparency : {
                setMinTrans : 0.1, // setMinTrans > trans ? trans=0.1 
            }
        };
            
        // PapaParse옵션을 만들어 문자열 파싱
        // parameters
        // csvFile : CSV string
        // return parsed object
        function parseCsvFile(csvFile) {
            // papaParse 옵션 객체
            var parseConfig = Settings.parse;
            var csvParse = Papa.parse(csvFile, parseConfig); // Parse
            csvParse.data.splice(0, 2); // 불필요한 데이터 splice

            for(var i = 1 ; i < csvParse.data[0].length ; i++ )
            {
                if(i % 2 != 0){ // 홀
                    words.push(csvParse.data[0][i]);
                }else{ // 짝
                    terms.push(csvParse.data[0][i]);
                }
            }
            console.log(csvParse.data);
            csvParse.data.splice(0,1);
            // delete blank array , 비어있는 배열 삭제 
            for(var i = 0 ; i<csvParse.data.length ; i++ ){ 
                if(csvParse.data[i][0] == undefined || csvParse.data[i][1] == undefined){
                    console.log("parseCsvFile - deleted data index : " + i);
                    console.log(csvParse.data[i][0]);
                    console.log(csvParse.data[i][1]);
                    csvParse.data.splice(i,1);
                }
            }
            
            if(words.length == 1){
                maxInterest = csvParse.data[0][1];
                minInterest = csvParse.data[(csvParse.data.length-2)][1];
            }
            
             var countries = Datamap.prototype.worldTopo.objects.world.geometries;
             console.log("datamaps countries object");
             console.log(countries);
        
            console.log(csvParse);
            console.log(words);
            console.log(terms);
            return csvParse;
        }
        
        
        // function setMaxMinInterest(csvParse){
        //     // set maxInterest, minInterest
        //     var list_tmp = csvParse.data;
        //     console.log(list_tmp);
        //     for(i = 0, max = -1; i < list_tmp.length ; i++ ){
        //         if(max < list_tmp[i][1]){
        //             max = list_tmp[i][1];
        //             maxInterest = list_tmp[i][1];
        //         }
        //         if(csvParse.data[i][2] != undefined){
        //             if(max < csvParse.data[i][2]){
        //                 max = csvParse.data[i][2];
        //                 maxInterest = csvParse.data[i][2];
        //             }
        //         }
        //     };

        //     for(i = 0, min = 100 ; i < csvParse.data.length ; i++){
        //         console.log(min + " > " + csvParse.data[i][1]);
        //         if(min > csvParse.data[i][1]){
        //             min = csvParse.data[i][1]; 
        //             minInterest = csvParse.data[i][1];
        //         }
        //         if(csvParse.data[i][2] != undefined){
        //             console.log("what?");
        //             if(min > csvParse.data[i][2]){
        //                 min = csvParse.data[i][2]; 
        //                 minInterest = csvParse.data[i][2];
        //             }
        //         }
                
        //     }
        // }

        // 각 국의 흥미도(0~100) 배열을 transparency(0~1) 배열로 리턴
        // parameters
        // percentData : interestData array (range 0~100)
        // return transparency Array (range 0~1)
        function percentToTransparencyData(percentData) {
            var transparencyData = new Array();
            console.log(percentData);
            for (count = 0; count < percentData.length; count++) {
                if (percentData[count] == undefined) {
                    transparencyData.push("undefined");
                } else if (percentData[count] == null) {
                    transparencyData.push("null");
                } else if (isNaN(percentData[count])) {
                    console.log(count + "th data is not a number");
                    transparencyData.push(0);
                } else {
                    if(percentData[count]/maxInterest <= Settings.transparency.setMinTrans){ // 투명도가 0.1 이하(호감도:10이하)로 내려가는 나라들의 투명도를 0.1로 고정
                        transparencyData.push(Settings.transparency.setMinTrans);			 // 투명도가 0.1 이하일 시 사람이 보기 어려움
                    }else{
                        transparencyData.push(percentData[count] / maxInterest);
                    }
                }
            }
            return transparencyData;
        }


        function compareInterests(InterestArray){
            var elementNum = InterestArray.length;
            var plusNum = -1;
            var var_tmp = { 'interest' : '' , 'wordIndex' : ''};
            var index_tmp;
            var ComparedArray = new Array();
            console.log("compareInterests - InterestArray");
            console.log(InterestArray);
            for(var i = 0 ; i < InterestArray[0].length ; i++ ){
                console.log(InterestArray[0][i]);
                console.log(InterestArray[1][i]);
                console.log(InterestArray[2][i]);
                var tmp_int = 0;
                for(fixedIndex = 0 ; fixedIndex < InterestArray.length - 1 ; fixedIndex++){
                    for(relIndex = 1 + tmp_int ; relIndex <= InterestArray.length - 1 ; relIndex++){
                        if(InterestArray[fixedIndex][i] > InterestArray[relIndex][i]){
                            console.log(InterestArray[fixedIndex][i] + " > " + InterestArray[relIndex][i]);
                            var_tmp.interest = InterestArray[fixedIndex][i];
                            var_tmp.wordIndex = fixedIndex;
                        }else if(InterestArray[fixedIndex][i] < InterestArray[relIndex][i]){
                            console.log(InterestArray[fixedIndex][i] + " < " + InterestArray[relIndex][i]);
                            var_tmp.interest = InterestArray[relIndex][i];
                            var_tmp.wordIndex = relIndex;
                        }else if(InterestArray[fixedIndex][i] = InterestArray[relIndex][i]){
                            console.log(InterestArray[fixedIndex][i] + " = " + InterestArray[relIndex][i]);
                        }else{
                            console.log(InterestArray[fixedIndex][i] + " ????? " + InterestArray[relIndex][i]);
                            var_tmp.interest = InterestArray[fixedIndex][i];
                            var_tmp.wordIndex = fixedIndex;
                        }
                    }
                    tmp_int++;
                }
                console.log("i : " + i + "   interest : " + var_tmp.interest + "   wordIndex : " + var_tmp.wordIndex);
                tmp_obj = new Object();
                tmp_obj.interest = var_tmp.interest;
                tmp_obj.wordIndex = var_tmp.wordIndex;
                ComparedArray.push(tmp_obj);
            }
            return ComparedArray;
        }
        
        // parsed object에서 흥미도 데이터 가져옴
        // parameters
        // parseCsvData : parsed object
        // return interestData array
        function getInterestFromCsv(parseCsvData) {
            var csvData = parseCsvData.data;
            var interestData = new Array();
            for( i = 0 ; i < words.length ; i++){
                interestData[i] = new Array();
            }
            console.log(csvData);
            
            if (csvData != null || csvData != undefined) {
                    for (count = 1; count < (words.length+1) ; count++) {
                        for(i = 0 ; i < csvData.length ; i++)
                        {
                            if (csvData[i][count] == undefined) {
                                interestData.push("0");
                            } else if (csvData[i][count] == null) {
                                interestData.push("0");
                            } else {
                                console.log("count : " + count);
                                console.log(" i : " + i);
                                console.log(csvData[i][(count)]);
                                interestData[(count-1)].push(csvData[i][(count)]);
                            }
                        }
                    }
            } else {
                console.log("csv 데이터 값이 비어있거나 정의되지 않았습니다.");
            }
            console.log(interestData);
            return interestData;
        }
        
        // parsed object에서 나라명 데이터 가져옴
        // parameters
        // parseCsvData : parsed object
        // return Countries name array
        function getCountriesFromCsv(parseCsvData) {
            var csvData = parseCsvData.data;
            var countryNames = new Array();

            if (csvData != null || csvData != undefined) {
                for (var count = 0; count < csvData.length; count++) {
                    var data = csvData[count][0];
                    if (data == undefined) {
                        countryNames.push("undefined");
                    } else if (data == null) {
                        countryNames.push("null");
                    } else if (data == "") {
                        console.log("blank Data index : " + count);
                        countryNames.push("BLANKDATA");
                    } else {
                        countryNames.push(data);
                    }
                }
            } else {
                console.log("csv 데이터 값이 비어있거나 정의되지 않았습니다.");
            }
            console.log(countryNames);
            return countryNames;
        }
        
        /* csv파일의 0~100 까지의 수치를 16진수로 변환 */
        // function PercentTransTo16bit(percentArr){
        //     var percent16BitArr = new Array();
        //     console.log(percentArr.length);
        //     for(count=0; count < percentArr.length ; count++ ){
        //         var percent = percentArr[count];
        //         if(percent == "undefined"){
        //             percent16BitArr.push("undefined");
        //         }else if(percent == "null"){
        //             percent16BitArr.push("null");
        //         }else{
        //             percent16BitArr.push(percent.toString(16));
        //         }
        //     }
        //     return percent16BitArr;
        // }
        
        
        // 한글 나라명으로 데이터셋과 매칭시켜 국가코드로 변환
        // parameters
        // countryNames : Countries name array (korean)
        // return Matched data object
        function mappingCountryToAbbreviation(countryNames) {
            var countriesName_EngCode = []; // mapping해서 저장할 배열
            var countriesName_Kor = [];
        
            var dic = countriesObject.countries;
        
            for (var outerCount = 0; outerCount < countryNames.length; outerCount++) {
                var countryName = countryNames[outerCount];
                var excepName = new Array();
                if (countryName != null || countryName != undefined || countryName != "" || countryName != "BLANKDATA") {
                    for (var middleCount = 0; middleCount < dic.length; middleCount++) {
                        if (countryName == dic[middleCount][0]) {
                            countriesName_EngCode.push(dic[middleCount][1]);
                            countriesName_Kor.push(dic[middleCount][0]);
                        }
                    }
                } else {
                    console.log("나라이름이 null 혹은 빈칸이거나 정의되지 않음 index : " + outerCount);
                }
            }
            console.log("mappingCountryToAbbreviation return object");
            console.log({
                code: countriesName_EngCode,
                kor: countriesName_Kor
            });
            return {
                code: countriesName_EngCode,
                kor: countriesName_Kor
            };
        }
        
        
        // 각 국 Fillcolor 데이터 생성
        // parameters
        // codes : Countries code array
        // score : Interest data array
        // return Fill object
        function makeColorObject(codes, score) {
            var colorObject_fill = {
                defaultFill: Settings.style.defaultColor
            };
            var colorObject_data = {};
        
            for (var count = 0; count < codes.length; count++) {
                colorObject_fill[codes[count]] = Settings.style.interestColor + score[count] + ")";
                colorObject_data[codes[count]] = {
                    fillKey: codes[count]
                };
            }
        
            return {
                fill: colorObject_fill,
                data: colorObject_data
            };
        }
        
        function makeColorObject_words(codes, comparedInterest){
            var colorObject_fill = {
                defaultFill: Settings.style.defaultColor
            };
            var colorObject_data = {};
            console.log(comparedInterest);
            for (var count = 0; count < codes.length; count++) {
                console.log(Settings.style.wordsColor[comparedInterest[count].wordIndex]);
                colorObject_fill[codes[count]] = Settings.style.wordsColor[comparedInterest[count].wordIndex];
                colorObject_data[codes[count]] = {
                    fillKey: codes[count]
                };
            }
                
            return {
                fill: colorObject_fill,
                data: colorObject_data
            };
        }
        
        // main process
        function csvLoadDataMap(csvstr) {
            var TransparencyData; // 투명도 데이터
            var mapped_CountriesName; // 각 국의 매핑된 한글나라명
            var mapped_CountriesCode; // 각 국의 매핑된 나라코드
            var datamapObject_fill; // datamap에 사용될 fill object
            var datamapObject_data; // datamap에 사용될 data object
            var comparedInterest; // words 일 시 사용됨
            var csvString = csvstr;
            var parseCsvData = parseCsvFile(csvString); // papaParse를 이용한 csv 파싱
            var countryNames = getCountriesFromCsv(parseCsvData); // 파싱한 데이터를 가지고 각 한글 나라명을 가져옴
            var interestData = getInterestFromCsv(parseCsvData); // 파싱한 데이터를 가지고 각 나라의 관심도를 가져옴 1~100

            if(words.length != 1){
                comparedInterest = compareInterests(interestData);
            }
            
            var mappingFunction = mappingCountryToAbbreviation(countryNames); // 한글 나라명을 가지고 countriesObject에서 매칭시켜 나라코드를 가져옴
                mapped_CountriesCode = mappingFunction.code; // 코드
                mapped_CountriesName = mappingFunction.kor; // 한글
            var makeObjectFunction;
                datamapObject_data;
                datamapObject_fill;
                if(words.length == 1){
                    TransparencyData = percentToTransparencyData(interestData); // 관심도(1~100)를 투명도(0~1) 로 변환
                    makeObjectFunction = makeColorObject(mapped_CountriesCode, TransparencyData); // datamap에 쓰일 object를 생성함 (각나라별코드,한글나라명,투명도)
                    datamapObject_data = makeObjectFunction.data; // data objcet
                    datamapObject_fill = makeObjectFunction.fill; // fill object
                }else{
                    makeObjectFunction = makeColorObject_words(mapped_CountriesCode, comparedInterest);
                    datamapObject_data = makeObjectFunction.data; // data objcet
                    datamapObject_fill = makeObjectFunction.fill; // fill object
                    console.log(datamapObject_data);
                    console.log(datamapObject_fill);
                }
        
                console.log(Settings.style.wordsColor[0]);
                console.log(Settings.style.wordsColor[1]);
                console.log(Settings.style.wordsColor[2]);
                console.log(Settings.style.wordsColor[3]);
                console.log(Settings.style.wordsColor[4]);


                ///////////////////////////////////
                /*              log              */
                ///////////////////////////////////
                console.log(" --- 매핑된 데이터 --- ");
                console.log(mapped_CountriesName);
                console.log(mapped_CountriesCode);

                console.log("========== compared ============");
                console.log(comparedInterest);
        
                console.log(" --- 호감도 Max, Min --- ");
                console.log(" Max : " + maxInterest);
                console.log(" Min : " + minInterest);
                
                console.log(" --- 투명도 데이터 --- ");
                console.log(TransparencyData);
        
                console.log(" --- 한글 나라명 데이터 --- ");
                console.log(countryNames);
        
                console.log(" --- csv 파일 파싱 데이터 --- ");
                console.log(parseCsvData);
        
                console.log(" --- 각 국의 관심도 데이터 --- ");
                console.log(interestData);
        
                console.log("--- datamap에 쓰일 object ---");
                console.log(datamapObject_fill);
                console.log(datamapObject_data);
        
                // log end
        
                var basic_choropleth = new Datamap({
                    element: document.getElementById("container"),
                    setProjection: function(element) {
                        var projection = d3.geo.mercator()
                          .rotate([197.3,0]) // x , y
                          .scale(element.offsetWidth / 2 / Math.PI) // scale
                          .translate([element.offsetWidth / 2 , element.offsetHeight / 2 + element.offsetHeight / 5.6 ]); // 투영?
                        var path = d3.geo.path().projection( projection );
                        return {path: path, projection: projection};
                      },
                    responsive : true,
                    height: null,
                    width: null,
                    fills: datamapObject_fill,
                    data: datamapObject_data,
                    geographyConfig : {
                        popupTemplate : function(geography, data){
                            var dic = countriesObject.countries;
                            var country_Interest;
                            // console.log(geography);
        
                            for(var i = 0 ; i <dic.length ; i++){
                                if(geography.id == dic[i][1]){
                                    // console.log("detect");
                                    for(var a = 0 ; a < parseCsvData.data.length ; a++ ){
                                        // console.log(dic[i][0] + " ==? " + parseCsvData.data[a][0]);
                                        if(dic[i][0] == parseCsvData.data[a][0]){
                                            return '<div class=hoverinfo><strong>' + dic[i][0] + "  " + parseCsvData.data[a][1] + '</strong></div>';
                                        }
                                    }
                                    return '<div class=hoverinfo><strong>' + dic[i][0] + '</strong></div>';
                                }
                            }
                            return '<div class=hoverinfo><strong>' + geography.properties.name + '</strong></div>';
                        }
                    }
                });
                var countries = Datamap.prototype.worldTopo.objects.world.geometries;
                console.log(countries);
                // console.log("window width : " + window.innerWidth);
                // console.log("container.offsetWidth : " + container.offsetWidth);
                window.addEventListener('resize', function(event) {
                    // console.log(event.currentTarget.innerWidth);
                    // console.log(event.currentTarget.innerHeight);
                    basic_choropleth.resize();
                });
        }        