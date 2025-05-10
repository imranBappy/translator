const translateApi = async  (inputText:string,fromLang:string, toLang:string) => {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${fromLang}|${toLang}`;
    const res = await fetch(apiUrl)
    const data = await res.json()
    if (data?.responseStatus === 200) return data?.responseData.translatedText;
    return ""
};

export default translateApi


const API_KEY = 'AIzaSyAMXR-FYq11iXmboOtoVAysZZfo0EWr0HM';

export async function translateApiV2(
    inputText: string,
    fromLang: string,
    toLang: string
) {
    const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                q: inputText,
                target: toLang,
                source: fromLang,
                format: 'text',
            }),
        }
    );

    const data = await response.json();
    console.log({ data });

    return data.data.translations[0].translatedText;
}
