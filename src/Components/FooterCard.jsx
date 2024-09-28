

const FooterCard = ({title,links}) => {
  return (
    <div className="flex flex-col min-w-[300px] mb-10">
        <h3 className='text-3xl font-montserrat font-medium mb-5'>{title}</h3>
        {links.map((link,i) => (
            <a key={i} href={link.href} className="info-text mb-2" >{link.name}</a>
        ))}
    </div>
  )
}

export default FooterCard;