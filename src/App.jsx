import Button from "./Button"
function App() {
   
  const Container2 = [
    {
     
      titulo: "PREVIOUS",
      sub: "JQUERY: DETECT UPDATE OF HTML",
      sub2: "ELEMENT"
      
    },
    {
      titulo: "NEXT",
      sub: "RAILS + DEVISE WORKING WITH",
      sub2: "MULTIPLE MODELS"

    }
  ]

  return (
    <div className='cont'>
        {
          Container2.map((cont, id) => {
            return <Button key={id}
              titulo={cont.titulo}
              sub={cont.sub}
              sub2={cont.sub2}
              
            />;
          })
        }
      </div>
  );
}

export default App
