
export default function Home() {
  const handleLocalStorage = ()=>{
    console.log('from pacakge', getCookie('auth'));
    localStorage.setItem('test','1msadncmsd23');
  }
  function getCookie(name:string) {
    if (typeof window === "undefined") return null
    function escape(s:any) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

  return (
    <div onClick={handleLocalStorage}>
      <h1 className="text-3xl font-bold underline text-red-600">Hello world! + {getCookie('auth')}</h1>
    </div>
  );
}
