	// 나라명과 나라코드의 오브젝트 배열
const countriesObject = {
    countries: [
        ["안도라", "AND"],
        ["앙골라", "ANG"],
        ["앤티가 바부다", "ANT"],
        ["아르헨티나", "ARG"],
        ["아르메니아", "ARM"],
        ["아루바", "ARU"],
        ["아메리칸사모아", "ASA"],
        ["오스트레일리아", "AUS"],
        ["오스트리아", "AUT"],
        ["아제르바이잔", "AZE"],
        ["바하마", "BAH"],
        ["방글라데시", "BAN"],
        ["바베이도스", "BAR"],
        ["부룬디", "BDI"],
        ["벨기에", "BEL"],
        ["베냉", "BEN"],
        ["버뮤다", "BER"],
        ["부탄", "BHU"],
        ["보스니아", "BIH"],
        ["벨리즈", "BIZ"],
        ["벨라루스", "BLR"],
        ["볼리비아", "BOL"],
        ["보츠와나", "BOT"],
        ["브라질", "BRA"],
        ["바레인", "BRN"],
        ["브루나이", "BRU"],
        ["불가리아", "BUL"],
        ["부르키나파소", "BUR"],
        ["중앙아프리카 공화국", "CAF"],
        ["캄보디아", "CAM"],
        ["캐나다", "CAN"],
        ["케이맨 제도", "CAY"],
        ["콩고 공화국", "CGO"],
        ["차드", "CHA"],
        ["칠레", "CHI"],
        ["중화인민공화국", "CHN"],
        ["코트디부아르", "CIV"],
        ["카메룬", "CMR"],
        ["콩고 민주 공화국", "COD"],
        ["쿡 제도", "COK"],
        ["콜롬비아", "COL"],
        ["코모로", "COM"],
        ["카보베르데", "CPV"],
        ["코스타리카", "CRC"],
        ["크로아티아", "CRO"],
        ["쿠바", "CUB"],
        ["키프로스", "CYP"],
        ["체코", "CZE"],
        ["덴마크", "DEN"],
        ["지부티", "DJI"],
        ["도미니카 연방", "DMA"],
        ["도미니카 공화국", "DOM"],
        ["에콰도르", "ECU"],
        ["이집트", "EGY"],
        ["에리트레아", "ERI"],
        ["엘살바도르", "ESA"],
        ["스페인", "ESP"],
        ["에스토니아", "EST"],
        ["에티오피아", "ETH"],
        ["피지", "FIJ"],
        ["핀란드", "FIN"],
        ["프랑스", "FRA"],
        ["미크로네시아 연방", "FSM"],
        ["가봉", "GAB"],
        ["감비아", "GAM"],
        ["영국", "GBR"],
        ["기니비사우", "GBS"],
        ["조지아", "GEO"],
        ["적도 기니", "GEQ"],
        ["독일", "GER"],
        ["가나", "GHA"],
        ["그리스", "GRE"],
        ["그레나다", "GRN"],
        ["과테말라", "GUA"],
        ["기니", "GUI"],
        ["괌", "GUM"],
        ["가이아나", "GUY"],
        ["아이티", "HAI"],
        ["홍콩", "HKG"],
        ["온두라스", "HON"],
        ["헝가리", "HUN"],
        ["인도네시아", "INA"],
        ["인도", "IND"],
        ["이란", "IRI"],
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
        ["사우디아라비아", "KSA"],
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
        ["말레이시아", "MAS"],
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
        ["네덜란드", "NED"],
        ["네팔", "NEP"],
        ["나이지리아", "NGR"],
        ["니제르", "NIG"],
        ["노르웨이", "NOR"],
        ["나우루", "NRU"],
        ["뉴질랜드", "NZL"],
        ["오만", "OMA"],
        ["파키스탄", "PAK"],
        ["파나마", "PAN"],
        ["파라과이", "PAR"],
        ["페루", "PER"],
        ["필리핀", "PHI"],
        ["팔레스타인", "PLE"],
        ["팔라우", "PLW"],
        ["파푸아뉴기니", "PNG"],
        ["폴란드", "POL"],
        ["포르투갈", "POR"],
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
        ["스위스", "SUI"],
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
        ["아랍에미리트", "UAE"],
        ["우간다", "UGA"],
        ["우크라이나", "UKR"],
        ["우루과이", "URU"],
        ["미국", "USA"],
        ["우즈베키스탄", "UZB"],
        ["바누아투", "VAN"],
        ["베네수엘라", "VEN"],
        ["베트남", "VIE"],
        ["세인트빈센트 그레나딘", "VIN"],
        ["예멘", "YEM"],
        ["잠비아", "ZAM"],
        ["짐바브웨", "ZIM"]
    ]
};

// PapaParse옵션을 만들어 문자열 파싱
// parameters
// csvFile : CSV string
// return parsed object
function parseCsvFile(csvFile) {
    // papaParse 옵션 객체
    var parseConfig = {
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
    }
    var csvParse = Papa.parse(csvFile, parseConfig); // Parse
    console.log("csvParse tpye is : " + $.type(csvParse));
    csvParse.data.splice(0, 3); // 불필요한 데이터 splice
    console.log(csvParse);
    return csvParse;
}

// 각 국의 흥미도(0~100) 배열을 transparency(0~1) 배열로 리턴
// parameters
// percentData : interestData array (range 0~100)
// return transparency Array (range 0~1)
function percentToTransparencyData(percentData) {
    var transparencyData = new Array();
    for (count = 0; count < percentData.length; count++) {
        if (percentData[count] == undefined) {
            transparencyData.push("undefined");
        } else if (percentData[count] == null) {
            transparencyData.push("null");
        } else if (isNaN(percentData[count])) {
            console.log(count + "th data is not a number");
            transparencyData.push(0);
        } else {
            transparencyData.push(percentData[count] / 100);
        }
    }
    return transparencyData;
}

// parsed object에서 흥미도 데이터 가져옴
// parameters
// parseCsvData : parsed object
// return interestData array
function getInterestFromCsv(parseCsvData) {
    var csvData = parseCsvData.data;
    var interestData = new Array();
    if (csvData != null || csvData != undefined) {
        for (count = 0; count < csvData.length - 1; count++) {
            var data = csvData[count + 1][1];
            if (data == undefined) {
                interestData.push("undefined");
            } else if (data == null) {
                interestData.push("null");
            } else {
                interestData.push(Number(csvData[count + 1][1]));
            }
        }
    } else {
        console.log("csv 데이터 값이 비어있거나 정의되지 않았습니다.");
    }
    return interestData;
}

// parsed object에서 나라명 데이터 가져옴
// parameters
// parseCsvData : parsed object
// return Countries name array
function getCountriesFromCsv(parseCsvData) {
    var csvData = parseCsvData.data;
    var countryNames = new Array();
    console.log(csvData);
    if (csvData != null || csvData != undefined) {
        for (var count = 0; count < csvData.length - 1; count++) {
            var data = csvData[count + 1][0];
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
    console.log("mapping function started");
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
        defaultFill: "#F2F2F2"
    };
    var colorObject_data = {};

    //매핑문제 아직 해결되지 않아서 length code기준으로 걸어두었습니다.
    for (var count = 0; count < codes.length; count++) {
        colorObject_fill[codes[count]] = "rgba(0,84,255," + score[count] + ")";
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
function csvLoadDataMap() {
    var TransparencyData; // 투명도 데이터
    var mapped_CountriesName; // 각 국의 매핑된 한글나라명
    var mapped_CountriesCode; // 각 국의 매핑된 나라코드
    var datamapObject_fill; // datamap에 사용될 fill object
    var datamapObject_data; // datamap에 사용될 data object
    var fileElem = document.getElementById("inputFile");
    file = fileElem.files[0];
    fr = new FileReader();
    fr.onload = function(event) {
        var csvString = fr.result;
        var parseCsvData = parseCsvFile(csvString); // papaParse를 이용한 csv 파싱
        var countryNames = getCountriesFromCsv(parseCsvData); // 파싱한 데이터를 가지고 각 한글 나라명을 가져옴
        var interestData = getInterestFromCsv(parseCsvData); // 파싱한 데이터를 가지고 각 나라의 관심도를 가져옴 1~100

        var mappingFunction = mappingCountryToAbbreviation(countryNames); // 한글 나라명을 가지고 countriesObject에서 매칭시켜 나라코드를 가져옴
        mapped_CountriesCode = mappingFunction.code; // 코드
        mapped_CountriesName = mappingFunction.kor; // 한글명


        TransparencyData = percentToTransparencyData(interestData); // 관심도(1~100)를 투명도(0~1) 로 변환


        var makeObjectFunction = makeColorObject(mapped_CountriesCode, TransparencyData); // datamap에 쓰일 object를 생성함 (각나라별코드,한글나라명,투명도)
        datamapObject_data = makeObjectFunction.data; // data objcet
        datamapObject_fill = makeObjectFunction.fill; // fill object

        ///////////////////////////////////
        /*              로그               */
        ///////////////////////////////////
        console.log(" --- 매핑된 데이터 --- ");
        console.log(mapped_CountriesName);
        console.log(mapped_CountriesCode);

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

        // end

        var basic_choropleth = new Datamap({
            element: document.getElementById("container"),
            projection: 'mercator',
            height: 700,
            width: 1000,
            fills: datamapObject_fill,
            data: datamapObject_data
        });
    }
    fr.readAsText(file); // 파일 읽어옴
}