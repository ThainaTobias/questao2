import "./Button.css"
function Button({titulo,sub,sub2}) {

    return(

      <button className="botao">< strong className="titulo">{titulo}</strong><p className="sub">{sub}</p><p className="sub2">{sub2}</p>
      </button>


        
    );
}
export default Button;