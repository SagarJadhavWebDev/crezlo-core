
export default function Home() {
  const handleLocalStorage = ()=>{
    localStorage.setItem('test','1msadncmsd23');
  }
  return (
    <div onClick={handleLocalStorage}>
      <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1>
    </div>
  );
}
