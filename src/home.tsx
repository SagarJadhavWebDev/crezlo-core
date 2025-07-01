export default function Home() {
  function getCookie(name: string) {
    console.log('getCookie1')
    if (typeof window === "undefined") return null;
    function escape(s: any) {
      return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1");
    }
    var match = document.cookie.match(
      RegExp("(?:^|;\\s*)" + escape(name) + "=([^;]*)")
    );
    console.log('getCookie2')
    return match ? match[1] : null;
  }
  const handleLocalStorage = () => {
    const data = getCookie("auth");
    console.log("from pacakge", data);
    localStorage.setItem("test", "1msadncmsd23");
  };

  return (
    <div onClick={handleLocalStorage}>
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world! + {getCookie("auth")}
      </h1>
    </div>
  );
}
