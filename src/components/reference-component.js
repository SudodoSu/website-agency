

function ReferenceComponent() {
  return (
    <>
        {items.map((item, index) => {
            return(
                <article key={index} className="ref-comp">
                    <div>
                        <img src={item.img}/>    
                    </div>
                </article>
            );
        })}
    </>
  )
}

export default ReferenceComponent