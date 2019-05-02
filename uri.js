// function
var uri=function(uri){

  // search
  let search=[];
  let s={};
  s={from:new RegExp(" ", "g"), to:"-"}; search.push(s);
  s={from:new RegExp("\t", "g"), to:"-"}; search.push(s);
  s={from:new RegExp("\n", "g"), to:"-"}; search.push(s);
  s={from:new RegExp("\r", "g"), to:"-"}; search.push(s);
  s={from:new RegExp("ä|æ|ǽ", "g"), to:"ae"}; search.push(s);
  s={from:new RegExp("ö|œ", "g"), to:"oe"}; search.push(s);
  s={from:new RegExp("ü", "g"), to:"ue"}; search.push(s);
  s={from:new RegExp("Ä", "g"), to:"Ae"}; search.push(s);
  s={from:new RegExp("Ü", "g"), to:"Ue"}; search.push(s);
  s={from:new RegExp("Ö", "g"), to:"Oe"}; search.push(s);
  s={from:new RegExp("À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ|Α|Ά|Ả|Ạ|Ầ|Ẫ|Ẩ|Ậ|Ằ|Ắ|Ẵ|Ẳ|Ặ|А", "g"), to:"A"}; search.push(s);
  s={from:new RegExp("à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª|α|ά|ả|ạ|ầ|ấ|ẫ|ẩ|ậ|ằ|ắ|ẵ|ẳ|ặ|а", "g"), to:"a"}; search.push(s);
  s={from:new RegExp("Б", "g"), to:"B"}; search.push(s);
  s={from:new RegExp("б", "g"), to:"b"}; search.push(s);
  s={from:new RegExp("Ç|Ć|Ĉ|Ċ|Č", "g"), to:"C"}; search.push(s);
  s={from:new RegExp("ç|ć|ĉ|ċ|č", "g"), to:"c"}; search.push(s);
  s={from:new RegExp("Д", "g"), to:"D"}; search.push(s);
  s={from:new RegExp("д", "g"), to:"d"}; search.push(s);
  s={from:new RegExp("Ð|Ď|Đ|Δ", "g"), to:"Dj"}; search.push(s);
  s={from:new RegExp("ð|ď|đ|δ", "g"), to:"dj"}; search.push(s);
  s={from:new RegExp("È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě|Ε|Έ|Ẽ|Ẻ|Ẹ|Ề|Ế|Ễ|Ể|Ệ|Е|Э", "g"), to:"E"}; search.push(s);
  s={from:new RegExp("è|é|ê|ë|ē|ĕ|ė|ę|ě|έ|ε|ẽ|ẻ|ẹ|ề|ế|ễ|ể|ệ|е|э", "g"), to:"e"}; search.push(s);
  s={from:new RegExp("Ф", "g"), to:"F"}; search.push(s);
  s={from:new RegExp("ф", "g"), to:"f"}; search.push(s);
  s={from:new RegExp("Ĝ|Ğ|Ġ|Ģ|Γ|Г|Ґ", "g"), to:"G"}; search.push(s);
  s={from:new RegExp("ĝ|ğ|ġ|ģ|γ|г|ґ", "g"), to:"g"}; search.push(s);
  s={from:new RegExp("Ĥ|Ħ", "g"), to:"H"}; search.push(s);
  s={from:new RegExp("ĥ|ħ", "g"), to:"h"}; search.push(s);
  s={from:new RegExp("Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ|Η|Ή|Ί|Ι|Ϊ|Ỉ|Ị|И|Ы", "g"), to:"I"}; search.push(s);
  s={from:new RegExp("ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı|η|ή|ί|ι|ϊ|ỉ|ị|и|ы|ї", "g"), to:"i"}; search.push(s);
  s={from:new RegExp("Ĵ", "g"), to:"J"}; search.push(s);
  s={from:new RegExp("ĵ", "g"), to:"j"}; search.push(s);
  s={from:new RegExp("Ķ|Κ|К", "g"), to:"K"}; search.push(s);
  s={from:new RegExp("ķ|κ|к", "g"), to:"k"}; search.push(s);
  s={from:new RegExp("Ĺ|Ļ|Ľ|Ŀ|Ł|Λ|Л", "g"), to:"L"}; search.push(s);
  s={from:new RegExp("ĺ|ļ|ľ|ŀ|ł|λ|л", "g"), to:"l"}; search.push(s);
  s={from:new RegExp("М", "g"), to:"M"}; search.push(s);
  s={from:new RegExp("м", "g"), to:"m"}; search.push(s);
  s={from:new RegExp("Ñ|Ń|Ņ|Ň|Ν|Н", "g"), to:"N"}; search.push(s);
  s={from:new RegExp("ñ|ń|ņ|ň|ŉ|ν|н", "g"), to:"n"}; search.push(s);
  s={from:new RegExp("Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ|Ο|Ό|Ω|Ώ|Ỏ|Ọ|Ồ|Ố|Ỗ|Ổ|Ộ|Ờ|Ớ|Ỡ|Ở|Ợ|О", "g"), to:"O"}; search.push(s);
  s={from:new RegExp("ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º|ο|ό|ω|ώ|ỏ|ọ|ồ|ố|ỗ|ổ|ộ|ờ|ớ|ỡ|ở|ợ|о", "g"), to:"o"}; search.push(s);
  s={from:new RegExp("П", "g"), to:"P"}; search.push(s);
  s={from:new RegExp("п", "g"), to:"p"}; search.push(s);
  s={from:new RegExp("Ŕ|Ŗ|Ř|Ρ|Р", "g"), to:"R"}; search.push(s);
  s={from:new RegExp("ŕ|ŗ|ř|ρ|р", "g"), to:"r"}; search.push(s);
  s={from:new RegExp("Ś|Ŝ|Ş|Ș|Š|Σ|С", "g"), to:"S"}; search.push(s);
  s={from:new RegExp("ś|ŝ|ş|ș|š|ſ|σ|ς|с", "g"), to:"s"}; search.push(s);
  s={from:new RegExp("Ț|Ţ|Ť|Ŧ|τ|Т", "g"), to:"T"}; search.push(s);
  s={from:new RegExp("ț|ţ|ť|ŧ|т", "g"), to:"t"}; search.push(s);
  s={from:new RegExp("Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ|Ũ|Ủ|Ụ|Ừ|Ứ|Ữ|Ử|Ự|У", "g"), to:"U"}; search.push(s);
  s={from:new RegExp("ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ|υ|ύ|ϋ|ủ|ụ|ừ|ứ|ữ|ử|ự|у", "g"), to:"u"}; search.push(s);
  s={from:new RegExp("Ý|Ÿ|Ŷ|Υ|Ύ|Ϋ|Ỳ|Ỹ|Ỷ|Ỵ|Й", "g"), to:"Y"}; search.push(s);
  s={from:new RegExp("ý|ÿ|ŷ|ỳ|ỹ|ỷ|ỵ|й", "g"), to:"y"}; search.push(s);
  s={from:new RegExp("В", "g"), to:"V"}; search.push(s);
  s={from:new RegExp("в", "g"), to:"v"}; search.push(s);
  s={from:new RegExp("Ŵ", "g"), to:"W"}; search.push(s);
  s={from:new RegExp("ŵ", "g"), to:"w"}; search.push(s);
  s={from:new RegExp("Ź|Ż|Ž|Ζ|З", "g"), to:"Z"}; search.push(s);
  s={from:new RegExp("ź|ż|ž|ζ|з", "g"), to:"z"}; search.push(s);
  s={from:new RegExp("Æ|Ǽ", "g"), to:"AE"}; search.push(s);
  s={from:new RegExp("ß", "g"), to:"ss"}; search.push(s);
  s={from:new RegExp("Ĳ", "g"), to:"IJ"}; search.push(s);
  s={from:new RegExp("ĳ", "g"), to:"ij"}; search.push(s);
  s={from:new RegExp("Œ", "g"), to:"OE"}; search.push(s);
  s={from:new RegExp("ƒ", "g"), to:"f"}; search.push(s);
  s={from:new RegExp("ξ", "g"), to:"ks"}; search.push(s);
  s={from:new RegExp("π", "g"), to:"p"}; search.push(s);
  s={from:new RegExp("β", "g"), to:"v"}; search.push(s);
  s={from:new RegExp("μ", "g"), to:"m"}; search.push(s);
  s={from:new RegExp("ψ", "g"), to:"ps"}; search.push(s);
  s={from:new RegExp("Ё", "g"), to:"Yo"}; search.push(s);
  s={from:new RegExp("ё", "g"), to:"yo"}; search.push(s);
  s={from:new RegExp("Є", "g"), to:"Ye"}; search.push(s);
  s={from:new RegExp("є", "g"), to:"ye"}; search.push(s);
  s={from:new RegExp("Ї", "g"), to:"Yi"}; search.push(s);
  s={from:new RegExp("Ж", "g"), to:"Zh"}; search.push(s);
  s={from:new RegExp("ж", "g"), to:"zh"}; search.push(s);
  s={from:new RegExp("Х", "g"), to:"Kh"}; search.push(s);
  s={from:new RegExp("х", "g"), to:"kh"}; search.push(s);
  s={from:new RegExp("Ц", "g"), to:"Ts"}; search.push(s);
  s={from:new RegExp("ц", "g"), to:"ts"}; search.push(s);
  s={from:new RegExp("Ч", "g"), to:"Ch"}; search.push(s);
  s={from:new RegExp("ч", "g"), to:"ch"}; search.push(s);
  s={from:new RegExp("Ш", "g"), to:"Sh"}; search.push(s);
  s={from:new RegExp("ш", "g"), to:"sh"}; search.push(s);
  s={from:new RegExp("Щ", "g"), to:"Shch"}; search.push(s);
  s={from:new RegExp("щ", "g"), to:"shch"}; search.push(s);
  s={from:new RegExp("Ъ|ъ|Ь|ь", "g"), to:""}; search.push(s);
  s={from:new RegExp("Ю", "g"), to:"Yu"}; search.push(s);
  s={from:new RegExp("ю", "g"), to:"yu"}; search.push(s);
  s={from:new RegExp("Я", "g"), to:"Ya"}; search.push(s);
  s={from:new RegExp("я", "g"), to:"ya"}; search.push(s);

  // replace
  search.forEach(async function(s, i){
    uri=uri.replace(s.from, s.to);
  });

  // return
  return uri;
};

// export
module.exports=uri;
