
function Button({style,text}) {
  return (
    <div className={`border-2 rounded-3xl border-black px-6 py-2 w-fit ` + style}>
        {text}
    </div>
  )
}

export default Button